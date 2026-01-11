-- Enable Row Level Security on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE restaurants ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE menu_recommendations ENABLE ROW LEVEL SECURITY;
ALTER TABLE foodie_applications ENABLE ROW LEVEL SECURITY;

-- Helper function to check if user is admin
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM profiles
    WHERE id = auth.uid()
    AND role = 'admin'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Helper function to check if user is foodie
CREATE OR REPLACE FUNCTION is_foodie()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM profiles
    WHERE id = auth.uid()
    AND role IN ('admin', 'foodie')
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- =====================
-- PROFILES POLICIES
-- =====================

-- Anyone can read profiles
CREATE POLICY "Profiles are viewable by everyone"
  ON profiles FOR SELECT
  USING (true);

-- Users can update their own profile
CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id)
  WITH CHECK (
    auth.uid() = id
    AND (role = (SELECT role FROM profiles WHERE id = auth.uid())) -- Can't change own role
  );

-- Only admins can update roles
CREATE POLICY "Admins can update any profile"
  ON profiles FOR UPDATE
  USING (is_admin());

-- =====================
-- RESTAURANTS POLICIES
-- =====================

-- Anyone can read active restaurants
CREATE POLICY "Active restaurants are viewable by everyone"
  ON restaurants FOR SELECT
  USING (is_active = true OR is_admin());

-- Only admins can insert restaurants
CREATE POLICY "Admins can insert restaurants"
  ON restaurants FOR INSERT
  WITH CHECK (is_admin());

-- Only admins can update restaurants
CREATE POLICY "Admins can update restaurants"
  ON restaurants FOR UPDATE
  USING (is_admin());

-- Only admins can delete restaurants
CREATE POLICY "Admins can delete restaurants"
  ON restaurants FOR DELETE
  USING (is_admin());

-- =====================
-- REVIEWS POLICIES
-- =====================

-- Anyone can read reviews
CREATE POLICY "Reviews are viewable by everyone"
  ON reviews FOR SELECT
  USING (true);

-- Authenticated users can insert reviews
CREATE POLICY "Authenticated users can insert reviews"
  ON reviews FOR INSERT
  WITH CHECK (
    auth.uid() = reviewer_id
    AND (
      -- Foodie reviews can only be created by foodies
      (is_foodie_review = false)
      OR (is_foodie_review = true AND is_foodie())
    )
  );

-- Users can update their own reviews
CREATE POLICY "Users can update own reviews"
  ON reviews FOR UPDATE
  USING (auth.uid() = reviewer_id)
  WITH CHECK (auth.uid() = reviewer_id);

-- Users can delete their own reviews, admins can delete any
CREATE POLICY "Users can delete own reviews"
  ON reviews FOR DELETE
  USING (auth.uid() = reviewer_id OR is_admin());

-- =====================
-- MENU ITEMS POLICIES
-- =====================

-- Anyone can read menu items
CREATE POLICY "Menu items are viewable by everyone"
  ON menu_items FOR SELECT
  USING (true);

-- Admins and foodies can insert menu items
CREATE POLICY "Admins and foodies can insert menu items"
  ON menu_items FOR INSERT
  WITH CHECK (is_foodie());

-- Admins and foodies can update menu items
CREATE POLICY "Admins and foodies can update menu items"
  ON menu_items FOR UPDATE
  USING (is_foodie());

-- Only admins can delete menu items
CREATE POLICY "Admins can delete menu items"
  ON menu_items FOR DELETE
  USING (is_admin());

-- =====================
-- MENU RECOMMENDATIONS POLICIES
-- =====================

-- Anyone can read recommendations
CREATE POLICY "Menu recommendations are viewable by everyone"
  ON menu_recommendations FOR SELECT
  USING (true);

-- Foodies can add recommendations
CREATE POLICY "Foodies can insert menu recommendations"
  ON menu_recommendations FOR INSERT
  WITH CHECK (auth.uid() = reviewer_id AND is_foodie());

-- Foodies can remove their own recommendations
CREATE POLICY "Foodies can delete own menu recommendations"
  ON menu_recommendations FOR DELETE
  USING (auth.uid() = reviewer_id OR is_admin());

-- =====================
-- FOODIE APPLICATIONS POLICIES
-- =====================

-- Users can read their own applications, admins can read all
CREATE POLICY "Users can view own applications"
  ON foodie_applications FOR SELECT
  USING (auth.uid() = user_id OR is_admin());

-- Authenticated users can create applications
CREATE POLICY "Users can create applications"
  ON foodie_applications FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Only admins can update applications (approve/reject)
CREATE POLICY "Admins can update applications"
  ON foodie_applications FOR UPDATE
  USING (is_admin());
