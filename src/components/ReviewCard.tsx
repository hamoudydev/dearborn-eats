import { Link } from '@tanstack/react-router'
import { StarRating } from './StarRating'
import type { Review } from '~/lib/types'

interface ReviewCardProps {
  review: Review
  showRestaurant?: boolean
}

export function ReviewCard({ review, showRestaurant = false }: ReviewCardProps) {
  const isFoodie = review.reviewer?.role === 'foodie'

  return (
    <div className="card bg-base-200">
      <div className="card-body">
        {/* Header */}
        <div className="flex items-start gap-4">
          <div className="avatar">
            <div className="w-12 h-12 rounded-full bg-base-300 flex items-center justify-center">
              {review.reviewer?.avatar_url ? (
                <img src={review.reviewer.avatar_url} alt={review.reviewer.display_name} className="rounded-full" />
              ) : (
                <span className="text-xl">👤</span>
              )}
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <Link to="/foodies/$id" params={{ id: review.reviewer?.id || '' }} className="font-bold hover:text-primary">
                {review.reviewer?.display_name || 'Anonymous'}
              </Link>
              {isFoodie && <span className="badge badge-primary badge-xs">Foodie</span>}
            </div>
            {showRestaurant && review.restaurant && (
              <Link to="/restaurants/$id" params={{ id: review.restaurant.id }} className="text-sm text-base-content/70 hover:text-primary">
                @ {review.restaurant.name}
              </Link>
            )}
            <div className="flex items-center gap-2 mt-1">
              <StarRating rating={review.rating} size="sm" />
              <span className="text-xs text-base-content/50">
                {new Date(review.created_at).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        {review.content && (
          <p className="mt-2 text-base-content/80">{review.content}</p>
        )}

        {/* Photos */}
        {review.photos && review.photos.length > 0 && (
          <div className="flex gap-2 mt-2 overflow-x-auto">
            {review.photos.map((photo, index) => (
              <img key={index} src={photo} alt="" className="w-24 h-24 object-cover rounded-lg" />
            ))}
          </div>
        )}

        {/* Menu Recommendations */}
        {review.menu_items && review.menu_items.length > 0 && (
          <div className="mt-2">
            <p className="text-sm font-medium text-primary">Must-try dishes:</p>
            <div className="flex flex-wrap gap-1 mt-1">
              {review.menu_items.map((item, index) => (
                <span key={index} className="badge badge-outline badge-sm">{item}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
