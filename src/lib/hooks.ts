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

// =====================
// ADMIN
// =====================

export function useAdminStats() {
  return useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const [restaurants, reviews, profiles, applications] = await Promise.all([
        supabase.from('restaurants').select('id', { count: 'exact' }),
        supabase.from('reviews').select('id', { count: 'exact' }),
        supabase.from('profiles').select('id, role', { count: 'exact' }),
        supabase.from('foodie_applications').select('id, status', { count: 'exact' }).eq('status', 'pending'),
      ])

      const foodies = await supabase.from('profiles').select('id', { count: 'exact' }).eq('role', 'foodie')

      return {
        restaurantCount: restaurants.count || 0,
        reviewCount: reviews.count || 0,
        userCount: profiles.count || 0,
        foodieCount: foodies.count || 0,
        pendingApplications: applications.count || 0,
      }
    },
  })
}

export function useAllRestaurants() {
  return useQuery({
    queryKey: ['admin-restaurants'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('restaurants')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      return data as Restaurant[]
    },
  })
}

export function useAllUsers() {
  return useQuery({
    queryKey: ['admin-users'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      return data as Profile[]
    },
  })
}

export function usePendingApplications() {
  return useQuery({
    queryKey: ['pending-applications'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('foodie_applications')
        .select(`
          *,
          user:profiles(*)
        `)
        .eq('status', 'pending')
        .order('created_at', { ascending: false })

      if (error) throw error
      return data
    },
  })
}

export function useCreateRestaurant() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (restaurant: Omit<Restaurant, 'id' | 'created_at' | 'updated_at'>) => {
      const { data, error } = await supabase
        .from('restaurants')
        .insert(restaurant)
        .select()
        .single()

      if (error) throw error
      return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['restaurants'] })
      queryClient.invalidateQueries({ queryKey: ['admin-restaurants'] })
      queryClient.invalidateQueries({ queryKey: ['admin-stats'] })
    },
  })
}

export function useUpdateRestaurant() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ id, ...updates }: Partial<Restaurant> & { id: string }) => {
      const { data, error } = await supabase
        .from('restaurants')
        .update(updates)
        .eq('id', id)
        .select()
        .single()

      if (error) throw error
      return data
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['restaurants'] })
      queryClient.invalidateQueries({ queryKey: ['restaurants', variables.id] })
      queryClient.invalidateQueries({ queryKey: ['admin-restaurants'] })
    },
  })
}

export function useDeleteRestaurant() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('restaurants')
        .delete()
        .eq('id', id)

      if (error) throw error
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['restaurants'] })
      queryClient.invalidateQueries({ queryKey: ['admin-restaurants'] })
      queryClient.invalidateQueries({ queryKey: ['admin-stats'] })
    },
  })
}

export function useUpdateUserRole() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ userId, role }: { userId: string; role: 'admin' | 'foodie' | 'public' }) => {
      const { data, error } = await supabase
        .from('profiles')
        .update({ role, is_verified: role === 'foodie' })
        .eq('id', userId)
        .select()
        .single()

      if (error) throw error
      return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-users'] })
      queryClient.invalidateQueries({ queryKey: ['foodies'] })
      queryClient.invalidateQueries({ queryKey: ['admin-stats'] })
    },
  })
}

export function useApproveApplication() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ applicationId, approved }: { applicationId: string; approved: boolean }) => {
      const { data: application } = await supabase
        .from('foodie_applications')
        .select('user_id')
        .eq('id', applicationId)
        .single()

      if (!application) throw new Error('Application not found')

      // Update application status
      await supabase
        .from('foodie_applications')
        .update({
          status: approved ? 'approved' : 'rejected',
          reviewed_at: new Date().toISOString(),
        })
        .eq('id', applicationId)

      // If approved, update user role to foodie
      if (approved) {
        await supabase
          .from('profiles')
          .update({ role: 'foodie', is_verified: true })
          .eq('id', application.user_id)
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pending-applications'] })
      queryClient.invalidateQueries({ queryKey: ['admin-users'] })
      queryClient.invalidateQueries({ queryKey: ['foodies'] })
      queryClient.invalidateQueries({ queryKey: ['admin-stats'] })
    },
  })
}
