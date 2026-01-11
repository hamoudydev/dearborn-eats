import { ReviewCard } from './ReviewCard'

export function FeaturedReviews() {
  // TODO: Fetch from Supabase - latest foodie reviews
  const reviews: never[] = []

  if (reviews.length === 0) {
    return (
      <div className="text-center py-12 bg-base-200 rounded-lg">
        <div className="text-5xl mb-4">📝</div>
        <h3 className="text-xl font-bold mb-2">No reviews yet</h3>
        <p className="text-base-content/70">Be the first to share your experience!</p>
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {reviews.map((review) => (
        <ReviewCard key={review} review={review} showRestaurant />
      ))}
    </div>
  )
}
