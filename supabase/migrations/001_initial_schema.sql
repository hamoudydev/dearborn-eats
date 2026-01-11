-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Enum for user roles
CREATE TYPE user_role AS ENUM ('admin', 'foodie', 'public');

-- Enum for application status
CREATE TYPE application_status AS ENUM ('pending', 'approved', 'rejected');

-- Profiles table (extends Supabase auth.users)
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  display_name TEXT NOT NULL,
  avatar_url TEXT,
  bio TEXT,
  role user_role DEFAULT 'public' NOT NULL,
  is_verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Restaurants table
CREATE TABLE restaurants (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  cuisine TEXT NOT NULL,
  price_range TEXT NOT NULL CHECK (price_range IN ('$', '$$', '$$$', '$$$$')),
  address TEXT NOT NULL,
  city TEXT DEFAULT 'Dearborn' NOT NULL,
  state TEXT DEFAULT 'MI' NOT NULL,
  zip_code TEXT NOT NULL,
  phone TEXT,
  website TEXT,
  latitude DOUBLE PRECISION NOT NULL,
  longitude DOUBLE PRECISION NOT NULL,
  image_url TEXT,
  is_food_truck BOOLEAN DEFAULT FALSE,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Reviews table
CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  restaurant_id UUID NOT NULL REFERENCES restaurants(id) ON DELETE CASCADE,
  reviewer_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  content TEXT,
  photos TEXT[],
  menu_items TEXT[],
  is_foodie_review BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  UNIQUE(restaurant_id, reviewer_id)
);

-- Menu items table (recommended dishes)
CREATE TABLE menu_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  restaurant_id UUID NOT NULL REFERENCES restaurants(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10, 2),
  image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Menu item recommendations (which foodies recommend which items)
CREATE TABLE menu_recommendations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  menu_item_id UUID NOT NULL REFERENCES menu_items(id) ON DELETE CASCADE,
  reviewer_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  review_id UUID REFERENCES reviews(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  UNIQUE(menu_item_id, reviewer_id)
);

-- Foodie applications table
CREATE TABLE foodie_applications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  status application_status DEFAULT 'pending' NOT NULL,
  application_text TEXT NOT NULL,
  reviewed_by UUID REFERENCES profiles(id) ON DELETE SET NULL,
  reviewed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  UNIQUE(user_id)
);

-- Indexes for performance
CREATE INDEX idx_restaurants_cuisine ON restaurants(cuisine);
CREATE INDEX idx_restaurants_location ON restaurants(latitude, longitude);
CREATE INDEX idx_restaurants_is_active ON restaurants(is_active);
CREATE INDEX idx_reviews_restaurant ON reviews(restaurant_id);
CREATE INDEX idx_reviews_reviewer ON reviews(reviewer_id);
CREATE INDEX idx_reviews_is_foodie ON reviews(is_foodie_review);
CREATE INDEX idx_profiles_role ON profiles(role);
CREATE INDEX idx_foodie_applications_status ON foodie_applications(status);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for updated_at
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_restaurants_updated_at
  BEFORE UPDATE ON restaurants
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_reviews_updated_at
  BEFORE UPDATE ON reviews
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- Function to create profile on user signup
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO profiles (id, email, display_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', split_part(NEW.email, '@', 1))
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile on signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- View for restaurant ratings
CREATE OR REPLACE VIEW restaurant_ratings AS
SELECT
  r.id AS restaurant_id,
  ROUND(AVG(CASE WHEN rv.is_foodie_review THEN rv.rating END)::numeric, 2) AS foodie_rating,
  ROUND(AVG(CASE WHEN NOT rv.is_foodie_review THEN rv.rating END)::numeric, 2) AS public_rating,
  ROUND(AVG(rv.rating)::numeric, 2) AS overall_rating,
  COUNT(CASE WHEN rv.is_foodie_review THEN 1 END) AS foodie_review_count,
  COUNT(CASE WHEN NOT rv.is_foodie_review THEN 1 END) AS public_review_count,
  COUNT(rv.id) AS total_review_count
FROM restaurants r
LEFT JOIN reviews rv ON r.id = rv.restaurant_id
GROUP BY r.id;

-- View for menu item recommendation counts
CREATE OR REPLACE VIEW menu_item_recommendations_count AS
SELECT
  mi.id AS menu_item_id,
  mi.restaurant_id,
  mi.name,
  COUNT(mr.id) AS recommendation_count
FROM menu_items mi
LEFT JOIN menu_recommendations mr ON mi.id = mr.menu_item_id
GROUP BY mi.id, mi.restaurant_id, mi.name;
