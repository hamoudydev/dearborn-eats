import { createFileRoute } from '@tanstack/react-router'
import { MapView } from '~/components/MapView'
import { FeaturedReviews } from '~/components/FeaturedReviews'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div>
      {/* Hero with Map */}
      <section className="h-[70vh] relative">
        <MapView />
        <div className="absolute top-8 left-8 z-10">
          <div className="bg-base-100/90 backdrop-blur-sm rounded-lg p-6 shadow-xl max-w-md">
            <h1 className="text-4xl font-bold text-primary mb-2">Dearborn Eats</h1>
            <p className="text-base-content/70">
              Discover the best restaurants and food trucks in Dearborn, MI — curated by local foodies.
            </p>
            <div className="mt-4 flex gap-2">
              <a href="/restaurants" className="btn btn-primary">Browse Restaurants</a>
              <a href="/foodies" className="btn btn-outline">Meet the Foodies</a>
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
                <p>Explore restaurants and food trucks across Dearborn on our interactive map.</p>
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
