import { createFileRoute, Outlet, useMatch } from '@tanstack/react-router'
import { useState } from 'react'
import { RestaurantCard } from '~/components/RestaurantCard'
import { useRestaurants } from '~/lib/hooks'

export const Route = createFileRoute('/restaurants')({
  component: RestaurantsLayout,
})

function RestaurantsLayout() {
  // Check if we're on a child route (restaurant detail page)
  const match = useMatch({ from: '/restaurants/$slug', shouldThrow: false })

  if (match) {
    return <Outlet />
  }

  return <RestaurantsPage />
}

function RestaurantsPage() {
  const [cuisineFilter, setCuisineFilter] = useState<string>('')
  const { data: restaurants, isLoading, error } = useRestaurants(
    cuisineFilter ? { cuisine: cuisineFilter } : undefined
  )

  const cuisines = ['Middle Eastern', 'Lebanese', 'Iraqi', 'Yemeni', 'Mediterranean', 'American', 'Mexican', 'Bakery']

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="text-6xl mb-4">😕</div>
        <h2 className="text-2xl font-bold mb-2">Error loading restaurants</h2>
        <p className="text-base-content/70">{error.message}</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Restaurants</h1>
          <p className="text-base-content/70">Explore Dearborn's best food spots</p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-2">
          <select
            className="select select-bordered"
            value={cuisineFilter}
            onChange={(e) => setCuisineFilter(e.target.value)}
          >
            <option value="">All Cuisines</option>
            {cuisines.map((cuisine) => (
              <option key={cuisine} value={cuisine}>{cuisine}</option>
            ))}
          </select>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-16">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : !restaurants || restaurants.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🍽️</div>
          <h2 className="text-2xl font-bold mb-2">No restaurants found</h2>
          <p className="text-base-content/70">
            {cuisineFilter ? `No ${cuisineFilter} restaurants yet.` : "Check back soon for Dearborn's best food spots!"}
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      )}
    </div>
  )
}
