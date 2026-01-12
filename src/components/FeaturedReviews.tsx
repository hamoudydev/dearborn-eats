import { ReviewCard } from './ReviewCard'
import { useFeaturedReviews } from '~/lib/hooks'
import { Link } from '@tanstack/react-router'

export function FeaturedReviews() {
  const { data: reviews, isLoading } = useFeaturedReviews(6)

  if (isLoading) {
    return (
      <div className="flex justify-center py-12">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    )
  }

  if (!reviews || reviews.length === 0) {
    return (
      <div className="text-center py-12 bg-base-200 rounded-lg">
        <div className="text-5xl mb-4">📝</div>
        <h3 className="text-xl font-bold mb-2">No reviews yet</h3>
        <p className="text-base-content/70 mb-4">Be the first to share your experience!</p>
        <Link to="/restaurants" className="btn btn-primary">Browse Restaurants</Link>
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} showRestaurant />
      ))}
    </div>
  )
}
