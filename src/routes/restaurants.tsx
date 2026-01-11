import { createFileRoute } from '@tanstack/react-router'
import { RestaurantCard } from '~/components/RestaurantCard'

export const Route = createFileRoute('/restaurants')({
  component: RestaurantsPage,
})

function RestaurantsPage() {
  // TODO: Fetch from Supabase
  const restaurants: never[] = []

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Restaurants</h1>
          <p className="text-base-content/70">Explore Dearborn's best food spots</p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-2">
          <select className="select select-bordered">
            <option>All Cuisines</option>
            <option>Middle Eastern</option>
            <option>American</option>
            <option>Mexican</option>
            <option>Asian</option>
          </select>
          <select className="select select-bordered">
            <option>Sort by Rating</option>
            <option>Sort by Name</option>
            <option>Sort by Newest</option>
          </select>
        </div>
      </div>

      {restaurants.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🍽️</div>
          <h2 className="text-2xl font-bold mb-2">No restaurants yet</h2>
          <p className="text-base-content/70">Check back soon for Dearborn's best food spots!</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant} restaurant={restaurant} />
          ))}
        </div>
      )}
    </div>
  )
}
