import { createFileRoute, Link } from '@tanstack/react-router'
import { ReviewCard } from '~/components/ReviewCard'
import { useFoodie, useFoodieReviews } from '~/lib/hooks'

export const Route = createFileRoute('/foodies/$id')({
  component: FoodieProfilePage,
})

function FoodieProfilePage() {
  const { id } = Route.useParams()
  const { data: foodie, isLoading, error } = useFoodie(id)
  const { data: reviews } = useFoodieReviews(id)

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    )
  }

  if (error || !foodie) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Foodie not found</h1>
        <Link to="/foodies" className="btn btn-primary">Back to Foodies</Link>
      </div>
    )
  }

  const uniqueRestaurants = new Set(reviews?.map(r => r.restaurant_id)).size
  const menuPicks = reviews?.reduce((sum, r) => sum + (r.menu_items?.length || 0), 0) || 0

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Foodie Header */}
      <div className="bg-base-200 rounded-lg p-8 mb-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="avatar">
            <div className="w-32 h-32 rounded-full bg-base-300 flex items-center justify-center overflow-hidden">
              {foodie.avatar_url ? (
                <img src={foodie.avatar_url} alt={foodie.display_name} className="w-full h-full object-cover" />
              ) : (
                <span className="text-5xl">👤</span>
              )}
            </div>
          </div>
          <div className="text-center md:text-left flex-1">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <h1 className="text-3xl font-bold">{foodie.display_name}</h1>
              {foodie.role === 'foodie' && foodie.is_verified && (
                <span className="badge badge-primary">Verified Foodie</span>
              )}
              {foodie.role === 'admin' && (
                <span className="badge badge-error">Admin</span>
              )}
            </div>
            {foodie.bio && (
              <p className="text-base-content/70 mb-4">{foodie.bio}</p>
            )}
            <div className="flex gap-6 justify-center md:justify-start text-sm">
              <div>
                <span className="font-bold text-lg">{reviews?.length || 0}</span>
                <span className="text-base-content/70 ml-1">Reviews</span>
              </div>
              <div>
                <span className="font-bold text-lg">{uniqueRestaurants}</span>
                <span className="text-base-content/70 ml-1">Restaurants</span>
              </div>
              <div>
                <span className="font-bold text-lg">{menuPicks}</span>
                <span className="text-base-content/70 ml-1">Must-Try Picks</span>
              </div>
            </div>
            <p className="text-xs text-base-content/50 mt-4">
              Member since {new Date(foodie.created_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </p>
          </div>
        </div>
      </div>

      {/* Foodie's Reviews */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Reviews by {foodie.display_name}</h2>

        {reviews && reviews.length > 0 ? (
          <div className="space-y-4">
            {reviews.map(review => (
              <ReviewCard key={review.id} review={review} showRestaurant />
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-base-content/70 bg-base-200 rounded-lg">
            <p className="text-lg mb-2">No reviews yet</p>
            <p className="text-sm">{foodie.display_name} hasn't written any reviews yet.</p>
          </div>
        )}
      </section>
    </div>
  )
}
