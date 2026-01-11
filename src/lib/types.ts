export type UserRole = 'admin' | 'foodie' | 'public'

export interface Profile {
  id: string
  email: string
  display_name: string
  avatar_url: string | null
  bio: string | null
  role: UserRole
  is_verified: boolean
  review_count?: number
  created_at: string
  updated_at: string
}

export interface Restaurant {
  id: string
  name: string
  slug: string
  description: string | null
  cuisine: string
  price_range: string
  address: string
  city: string
  state: string
  zip_code: string
  phone: string | null
  website: string | null
  latitude: number
  longitude: number
  image_url: string | null
  is_food_truck: boolean
  is_active: boolean
  foodie_rating: number | null
  public_rating: number | null
  review_count: number
  created_at: string
  updated_at: string
}

export interface Review {
  id: string
  restaurant_id: string
  reviewer_id: string
  rating: number
  content: string | null
  photos: string[] | null
  menu_items: string[] | null
  is_foodie_review: boolean
  created_at: string
  updated_at: string
  // Joined fields
  reviewer?: Profile
  restaurant?: Restaurant
}

export interface MenuItem {
  id: string
  restaurant_id: string
  name: string
  description: string | null
  price: number | null
  image_url: string | null
  recommended_by_count: number
  created_at: string
}

export interface FoodieApplication {
  id: string
  user_id: string
  status: 'pending' | 'approved' | 'rejected'
  application_text: string
  reviewed_by: string | null
  reviewed_at: string | null
  created_at: string
}
