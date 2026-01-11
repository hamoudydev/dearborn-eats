import { createFileRoute } from '@tanstack/react-router'
import { ReviewCard } from '~/components/ReviewCard'
import { StarRating } from '~/components/StarRating'

export const Route = createFileRoute('/restaurants/$id')({
  component: RestaurantDetailPage,
})

function RestaurantDetailPage() {
  const { id } = Route.useParams()

  // TODO: Fetch restaurant from Supabase
  const restaurant = null

  if (!restaurant) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Restaurant not found</h1>
        <a href="/restaurants" className="btn btn-primary">Back to Restaurants</a>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Restaurant Header */}
      <div className="bg-base-200 rounded-lg p-8 mb-8">
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          <div className="w-full md:w-64 h-48 bg-base-300 rounded-lg flex items-center justify-center">
            <span className="text-6xl">🍽️</span>
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">Restaurant Name</h1>
            <p className="text-base-content/70 mb-4">Cuisine Type • $$</p>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <StarRating rating={4.5} />
                <span className="font-bold">4.5</span>
                <span className="text-base-content/70">Foodie Average</span>
              </div>
            </div>
            <p className="mb-4">123 Michigan Ave, Dearborn, MI 48124</p>
            <div className="flex gap-2">
              <button className="btn btn-primary">Write a Review</button>
              <button className="btn btn-outline">Get Directions</button>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Recommendations */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Must-Try Dishes</h2>
        <div className="flex gap-4 overflow-x-auto pb-4">
          <div className="card bg-base-200 min-w-[200px]">
            <div className="card-body p-4">
              <h3 className="font-bold">Add menu items</h3>
              <p className="text-sm text-base-content/70">Foodies will recommend their favorite dishes here.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Reviews</h2>
          <select className="select select-bordered select-sm">
            <option>All Reviews</option>
            <option>Foodie Reviews Only</option>
            <option>Public Reviews</option>
          </select>
        </div>
        <div className="space-y-4">
          <div className="text-center py-8 text-base-content/70">
            No reviews yet. Be the first to review!
          </div>
        </div>
      </section>
    </div>
  )
}
