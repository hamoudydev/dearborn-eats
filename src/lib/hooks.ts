import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { supabase } from './supabase'
import type { Restaurant, Review, Profile } from './types'

// =====================
// RESTAURANTS
// =====================

export function useRestaurants(options?: { cuisine?: string; isFoodTruck?: boolean }) {
  return useQuery({
    queryKey: ['restaurants', options],
    queryFn: async () => {
      let query = supabase
        .from('restaurants')
        .select('*')
        .eq('is_active', true)
        .order('name')

      if (options?.cuisine) {
        query = query.eq('cuisine', options.cuisine)
      }
      if (options?.isFoodTruck !== undefined) {
        query = query.eq('is_food_truck', options.isFoodTruck)
      }

      const { data, error } = await query
      if (error) throw error
      return data as Restaurant[]
    },
  })
}

export function useRestaurant(id: string) {
  return useQuery({
    queryKey: ['restaurants', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('restaurants')
        .select('*')
        .eq('id', id)
        .single()

      if (error) throw error
      return data as Restaurant
    },
    enabled: !!id,
  })
}

export function useRestaurantRatings(restaurantId: string) {
  return useQuery({
    queryKey: ['restaurant-ratings', restaurantId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('restaurant_ratings')
        .select('*')
        .eq('restaurant_id', restaurantId)
        .single()

      if (error) throw error
      return data
    },
    enabled: !!restaurantId,
  })
}

// =====================
// REVIEWS
// =====================

export function useReviews(restaurantId: string, options?: { foodieOnly?: boolean }) {
  return useQuery({
    queryKey: ['reviews', restaurantId, options],
    queryFn: async () => {
      let query = supabase
        .from('reviews')
        .select(`
          *,
          reviewer:profiles(*)
        `)
        .eq('restaurant_id', restaurantId)
        .order('created_at', { ascending: false })

      if (options?.foodieOnly) {
        query = query.eq('is_foodie_review', true)
      }

      const { data, error } = await query
      if (error) throw error
      return data as (Review & { reviewer: Profile })[]
    },
    enabled: !!restaurantId,
  })
}

export function useFeaturedReviews(limit = 6) {
  return useQuery({
    queryKey: ['featured-reviews', limit],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('reviews')
        .select(`
          *,
          reviewer:profiles(*),
          restaurant:restaurants(*)
        `)
        .eq('is_foodie_review', true)
        .order('created_at', { ascending: false })
        .limit(limit)

      if (error) throw error
      return data as (Review & { reviewer: Profile; restaurant: Restaurant })[]
    },
  })
}

export function useCreateReview() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (review: {
      restaurant_id: string
      rating: number
      content?: string
      photos?: string[]
      menu_items?: string[]
    }) => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) throw new Error('Not authenticated')

      // Check if user is a foodie
      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single()

      const { data, error } = await supabase
        .from('reviews')
        .insert({
          ...review,
          reviewer_id: user.id,
          is_foodie_review: profile?.role === 'foodie' || profile?.role === 'admin',
        })
        .select()
        .single()

      if (error) throw error
      return data
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['reviews', variables.restaurant_id] })
      queryClient.invalidateQueries({ queryKey: ['restaurant-ratings', variables.restaurant_id] })
      queryClient.invalidateQueries({ queryKey: ['featured-reviews'] })
    },
  })
}

// =====================
// FOODIES
// =====================

export function useFoodies() {
  return useQuery({
    queryKey: ['foodies'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('role', 'foodie')
        .eq('is_verified', true)
        .order('display_name')

      if (error) throw error
      return data as Profile[]
    },
  })
}

export function useFoodie(id: string) {
  return useQuery({
    queryKey: ['foodies', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', id)
        .single()

      if (error) throw error
      return data as Profile
    },
    enabled: !!id,
  })
}

export function useFoodieReviews(foodieId: string) {
  return useQuery({
    queryKey: ['foodie-reviews', foodieId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('reviews')
        .select(`
          *,
          restaurant:restaurants(*)
        `)
        .eq('reviewer_id', foodieId)
        .order('created_at', { ascending: false })

      if (error) throw error
      return data as (Review & { restaurant: Restaurant })[]
    },
    enabled: !!foodieId,
  })
}

// =====================
// MENU ITEMS
// =====================

export function useMenuItems(restaurantId: string) {
  return useQuery({
    queryKey: ['menu-items', restaurantId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('menu_item_recommendations_count')
        .select('*')
        .eq('restaurant_id', restaurantId)
        .order('recommendation_count', { ascending: false })

      if (error) throw error
      return data
    },
    enabled: !!restaurantId,
  })
}
