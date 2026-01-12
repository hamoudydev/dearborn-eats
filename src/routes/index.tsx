import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'
import { RestaurantCard } from '~/components/RestaurantCard'
import { useRestaurants } from '~/lib/hooks'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const cuisineCategories = [
  { name: 'Middle Eastern', emoji: '🧆' },
  { name: 'Lebanese', emoji: '🇱🇧' },
  { name: 'Iraqi', emoji: '🍖' },
  { name: 'Yemeni', emoji: '🍲' },
  { name: 'Mediterranean', emoji: '🫒' },
  { name: 'American', emoji: '🍔' },
  { name: 'Mexican', emoji: '🌮' },
  { name: 'Asian', emoji: '🍜' },
  { name: 'Bakery', emoji: '🥯' },
]

function HomePage() {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const { data: restaurants, isLoading } = useRestaurants()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate({ to: '/restaurants', search: { q: searchQuery } })
    }
  }

  const handleCategoryClick = (cuisine: string) => {
    navigate({ to: '/restaurants', search: { cuisine } })
  }

  // Get a random selection of restaurants for featured section
  const featuredRestaurants = restaurants?.slice(0, 6) || []

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-base-100 pt-12 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              Dearborn's Best Eats
            </h1>
            <p className="text-lg text-base-content/70 mb-8">
              Discover restaurants and food trucks, reviewed by local foodies
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search for restaurants, cuisines, or dishes..."
                className="input input-lg w-full pl-12 pr-24 rounded-full shadow-lg border-2 border-base-300 focus:border-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 absolute left-4 top-1/2 -translate-y-1/2 text-base-content/50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <button
                type="submit"
                className="btn btn-primary btn-sm absolute right-2 top-1/2 -translate-y-1/2 rounded-full px-6"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Cuisine Categories */}
      <section className="py-8 border-b border-base-200">
        <div className="container mx-auto px-4">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {cuisineCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => handleCategoryClick(category.name)}
                className="flex flex-col items-center gap-2 min-w-[80px] p-3 rounded-xl hover:bg-base-200 transition-colors"
              >
                <span className="text-3xl">{category.emoji}</span>
                <span className="text-xs font-medium whitespace-nowrap">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold">Featured Restaurants</h2>
              <p className="text-base-content/60 text-sm">Popular spots in Dearborn</p>
            </div>
            <Link to="/restaurants" className="btn btn-ghost btn-sm">
              See all
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {isLoading ? (
            <div className="flex justify-center py-12">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {featuredRestaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Browse by Cuisine */}
      <section className="py-10 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Browse by Cuisine</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {cuisineCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => handleCategoryClick(category.name)}
                className="card bg-base-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="card-body items-center py-6">
                  <span className="text-4xl mb-2">{category.emoji}</span>
                  <span className="font-medium">{category.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-primary text-primary-content rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold">{restaurants?.length || 0}+</div>
                <div className="text-primary-content/80">Restaurants</div>
              </div>
              <div>
                <div className="text-4xl font-bold">{cuisineCategories.length}</div>
                <div className="text-primary-content/80">Cuisines</div>
              </div>
              <div>
                <div className="text-4xl font-bold">100%</div>
                <div className="text-primary-content/80">Local Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-base-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-3">Know Dearborn's Food Scene?</h2>
          <p className="text-base-content/70 mb-6 max-w-md mx-auto">
            Become a verified foodie and share your favorite spots with the community.
          </p>
          <Link to="/auth/register" className="btn btn-primary">
            Become a Foodie
          </Link>
        </div>
      </section>
    </div>
  )
}
