import { createFileRoute, Outlet, useMatch, useSearch } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { RestaurantCard } from '~/components/RestaurantCard'
import { useRestaurants } from '~/lib/hooks'

export const Route = createFileRoute('/restaurants')({
  component: RestaurantsLayout,
  validateSearch: (search: Record<string, unknown>) => {
    return {
      q: (search.q as string) || '',
      cuisine: (search.cuisine as string) || '',
    }
  },
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
  const search = useSearch({ from: '/restaurants' })
  const [searchQuery, setSearchQuery] = useState(search.q || '')
  const [cuisineFilter, setCuisineFilter] = useState<string>(search.cuisine || '')
  const { data: restaurants, isLoading, error } = useRestaurants()

  // Update filters when URL params change
  useEffect(() => {
    setSearchQuery(search.q || '')
    setCuisineFilter(search.cuisine || '')
  }, [search.q, search.cuisine])

  const cuisines = ['Middle Eastern', 'Lebanese', 'Iraqi', 'Yemeni', 'Mediterranean', 'American', 'Mexican', 'Asian', 'Bakery']

  // Filter restaurants by search query and cuisine
  const filteredRestaurants = restaurants?.filter((restaurant) => {
    const matchesSearch = searchQuery === '' ||
      restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCuisine = cuisineFilter === '' || restaurant.cuisine === cuisineFilter
    return matchesSearch && matchesCuisine
  })

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
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Restaurants</h1>
        <p className="text-base-content/70">Explore Dearborn's best food spots</p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search by name or cuisine..."
            className="input input-bordered w-full pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-base-content/50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
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

      {/* Results count */}
      {!isLoading && filteredRestaurants && (
        <p className="text-sm text-base-content/70 mb-4">
          {filteredRestaurants.length} {filteredRestaurants.length === 1 ? 'result' : 'results'}
          {(searchQuery || cuisineFilter) && ' found'}
        </p>
      )}

      {isLoading ? (
        <div className="flex justify-center py-16">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : !filteredRestaurants || filteredRestaurants.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🍽️</div>
          <h2 className="text-2xl font-bold mb-2">No restaurants found</h2>
          <p className="text-base-content/70">
            {searchQuery || cuisineFilter ? 'Try a different search or filter.' : "Check back soon for Dearborn's best food spots!"}
          </p>
          {(searchQuery || cuisineFilter) && (
            <button
              className="btn btn-outline btn-sm mt-4"
              onClick={() => { setSearchQuery(''); setCuisineFilter(''); }}
            >
              Clear filters
            </button>
          )}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      )}
    </div>
  )
}
