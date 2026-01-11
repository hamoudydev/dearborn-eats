import { Link } from '@tanstack/react-router'
import type { Profile } from '~/lib/types'

interface FoodieCardProps {
  foodie: Profile
}

export function FoodieCard({ foodie }: FoodieCardProps) {
  return (
    <Link to="/foodies/$id" params={{ id: foodie.id }} className="card bg-base-200 hover:shadow-lg transition-shadow">
      <div className="card-body items-center text-center">
        <div className="avatar mb-2">
          <div className="w-24 h-24 rounded-full bg-base-300 flex items-center justify-center">
            {foodie.avatar_url ? (
              <img src={foodie.avatar_url} alt={foodie.display_name} className="rounded-full" />
            ) : (
              <span className="text-4xl">👤</span>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <h3 className="card-title">{foodie.display_name}</h3>
          <span className="badge badge-primary badge-sm">Foodie</span>
        </div>
        {foodie.bio && (
          <p className="text-sm text-base-content/70 line-clamp-2">{foodie.bio}</p>
        )}
        <div className="flex gap-4 mt-2 text-sm">
          <div>
            <span className="font-bold">{foodie.review_count || 0}</span>
            <span className="text-base-content/70 ml-1">Reviews</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
