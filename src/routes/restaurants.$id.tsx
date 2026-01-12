import { createFileRoute, Link } from '@tanstack/react-router'
import { ReviewCard } from '~/components/ReviewCard'
import { StarRating } from '~/components/StarRating'
import { useRestaurant, useReviews } from '~/lib/hooks'

export const Route = createFileRoute('/restaurants/$id')({
  component: RestaurantDetailPage,
})

function RestaurantDetailPage() {
  const { id } = Route.useParams()
  const { data: restaurant, isLoading, error } = useRestaurant(id)
  const { data: reviews } = useReviews(id)

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    )
  }

  if (error || !restaurant) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Restaurant not found</h1>
        <Link to="/restaurants" className="btn btn-primary">Back to Restaurants</Link>
      </div>
    )
  }

  const foodieReviews = reviews?.filter(r => r.is_foodie_review) || []
  const publicReviews = reviews?.filter(r => !r.is_foodie_review) || []
  const avgRating = reviews?.length
    ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
    : 0

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Restaurant Header */}
      <div className="bg-base-200 rounded-lg p-8 mb-8">
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          <div className="w-full md:w-64 h-48 bg-base-300 rounded-lg flex items-center justify-center">
            {restaurant.image_url ? (
              <img src={restaurant.image_url} alt={restaurant.name} className="w-full h-full object-cover rounded-lg" />
            ) : (
              <span className="text-6xl">{restaurant.is_food_truck ? '🚚' : '🍽️'}</span>
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h1 className="text-3xl font-bold">{restaurant.name}</h1>
              {restaurant.is_food_truck && (
                <span className="badge badge-secondary">Food Truck</span>
              )}
            </div>
            <p className="text-base-content/70 mb-4">{restaurant.cuisine} • {restaurant.price_range}</p>
            {restaurant.description && (
              <p className="mb-4 text-base-content/80">{restaurant.description}</p>
            )}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <StarRating rating={avgRating} />
                <span className="font-bold">{avgRating.toFixed(1)}</span>
                <span className="text-base-content/70">({reviews?.length || 0} reviews)</span>
              </div>
            </div>
            <p className="mb-4">{restaurant.address}, {restaurant.city}, {restaurant.state} {restaurant.zip_code}</p>
            {restaurant.phone && (
              <p className="text-sm text-base-content/70 mb-2">📞 {restaurant.phone}</p>
            )}
            <div className="flex gap-2 mt-4">
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${restaurant.latitude},${restaurant.longitude}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
              >
                Get Directions
              </a>
              {restaurant.website && (
                <a href={restaurant.website} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                  Website
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Reviews</h2>
        </div>

        {/* Foodie Reviews */}
        {foodieReviews.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="badge badge-primary">Foodie Reviews</span>
            </h3>
            <div className="space-y-4">
              {foodieReviews.map(review => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </div>
        )}

        {/* Public Reviews */}
        {publicReviews.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Public Reviews</h3>
            <div className="space-y-4">
              {publicReviews.map(review => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </div>
        )}

        {(!reviews || reviews.length === 0) && (
          <div className="text-center py-8 text-base-content/70 bg-base-200 rounded-lg">
            <p className="text-lg mb-2">No reviews yet</p>
            <p className="text-sm">Be the first to review {restaurant.name}!</p>
          </div>
        )}
      </section>
    </div>
  )
}
