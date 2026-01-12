import { createFileRoute, Link } from '@tanstack/react-router'
import { FeaturedReviews } from '~/components/FeaturedReviews'
import { useRestaurants } from '~/lib/hooks'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const { data: restaurants } = useRestaurants()
  const restaurantCount = restaurants?.length || 0

  return (
    <div>
      {/* Hero */}
      <section className="hero min-h-[60vh] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-primary mb-4">Dearborn Eats</h1>
            <p className="text-xl text-base-content/70 mb-6">
              Discover the best restaurants and food trucks in Dearborn, MI — curated by local foodies.
            </p>
            {restaurantCount > 0 && (
              <div className="mb-6">
                <div className="badge badge-primary badge-lg">{restaurantCount} Places to Eat</div>
              </div>
            )}
            <div className="flex gap-4 justify-center">
              <Link to="/restaurants" className="btn btn-primary btn-lg">Browse All</Link>
              <Link to="/foodies" className="btn btn-outline btn-lg">Meet the Foodies</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Reviews */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Latest Foodie Reviews</h2>
        <FeaturedReviews />
      </section>

      {/* How it Works */}
      <section className="bg-base-200 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">How Dearborn Eats Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body items-center text-center">
                <div className="text-4xl mb-4">🍽️</div>
                <h3 className="card-title">Discover</h3>
                <p>Explore restaurants and food trucks across Dearborn, curated by locals.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body items-center text-center">
                <div className="text-4xl mb-4">⭐</div>
                <h3 className="card-title">Trusted Reviews</h3>
                <p>Read reviews from verified local foodies who know Dearborn's food scene.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body items-center text-center">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="card-title">Must-Try Dishes</h3>
                <p>Get menu recommendations so you know exactly what to order.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
