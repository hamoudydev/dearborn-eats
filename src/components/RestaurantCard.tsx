import { Link } from '@tanstack/react-router'
import { StarRating } from './StarRating'
import type { Restaurant } from '~/lib/types'

interface RestaurantCardProps {
  restaurant: Restaurant
}

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <Link to="/restaurants/$id" params={{ id: restaurant.id }} className="card bg-base-200 hover:shadow-lg transition-shadow">
      <figure className="h-48 bg-base-300 flex items-center justify-center">
        {restaurant.image_url ? (
          <img src={restaurant.image_url} alt={restaurant.name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-6xl">🍽️</span>
        )}
      </figure>
      <div className="card-body">
        <h3 className="card-title">{restaurant.name}</h3>
        <p className="text-base-content/70 text-sm">{restaurant.cuisine} • {restaurant.price_range}</p>
        <div className="flex items-center gap-2 mt-2">
          <StarRating rating={restaurant.foodie_rating || 0} size="sm" />
          <span className="text-sm font-medium">{restaurant.foodie_rating?.toFixed(1) || 'N/A'}</span>
          <span className="text-sm text-base-content/70">({restaurant.review_count || 0} reviews)</span>
        </div>
        {restaurant.address && (
          <p className="text-xs text-base-content/50 mt-2">{restaurant.address}</p>
        )}
      </div>
    </Link>
  )
}
