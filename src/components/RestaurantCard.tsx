import { Link } from '@tanstack/react-router'
import { StarRating } from './StarRating'
import type { Restaurant } from '~/lib/types'

interface RestaurantCardProps {
  restaurant: Restaurant
}

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <Link
      to="/restaurants/$slug"
      params={{ slug: restaurant.slug }}
      className="group block bg-base-100 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-200"
    >
      {/* Image */}
      <div className="relative h-40 bg-base-300 overflow-hidden">
        {restaurant.image_url ? (
          <img
            src={restaurant.image_url}
            alt={restaurant.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-base-200 to-base-300">
            <span className="text-5xl">{restaurant.is_food_truck ? '🚚' : '🍽️'}</span>
          </div>
        )}
        {/* Food Truck Badge */}
        {restaurant.is_food_truck && (
          <span className="absolute top-2 left-2 badge badge-secondary badge-sm font-medium">
            Food Truck
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-bold text-base line-clamp-1 group-hover:text-primary transition-colors">
            {restaurant.name}
          </h3>
          {restaurant.foodie_rating && restaurant.foodie_rating > 0 ? (
            <div className="flex items-center gap-1 bg-base-200 px-2 py-0.5 rounded text-sm font-medium shrink-0">
              <span className="text-warning">★</span>
              <span>{restaurant.foodie_rating.toFixed(1)}</span>
            </div>
          ) : null}
        </div>

        <p className="text-sm text-base-content/60 mb-2">
          {restaurant.cuisine} • {restaurant.price_range}
        </p>

        <p className="text-xs text-base-content/50 line-clamp-1">
          {restaurant.address}
        </p>
      </div>
    </Link>
  )
}
