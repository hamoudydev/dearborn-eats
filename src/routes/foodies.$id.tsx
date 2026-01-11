import { createFileRoute } from '@tanstack/react-router'
import { ReviewCard } from '~/components/ReviewCard'

export const Route = createFileRoute('/foodies/$id')({
  component: FoodieProfilePage,
})

function FoodieProfilePage() {
  const { id } = Route.useParams()

  // TODO: Fetch foodie from Supabase
  const foodie = null

  if (!foodie) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Foodie not found</h1>
        <a href="/foodies" className="btn btn-primary">Back to Foodies</a>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Foodie Header */}
      <div className="bg-base-200 rounded-lg p-8 mb-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="avatar">
            <div className="w-32 h-32 rounded-full bg-base-300 flex items-center justify-center">
              <span className="text-5xl">👤</span>
            </div>
          </div>
          <div className="text-center md:text-left flex-1">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <h1 className="text-3xl font-bold">Foodie Name</h1>
              <span className="badge badge-primary">Verified Foodie</span>
            </div>
            <p className="text-base-content/70 mb-4">
              Local food enthusiast with a passion for Middle Eastern cuisine.
            </p>
            <div className="flex gap-6 justify-center md:justify-start text-sm">
              <div>
                <span className="font-bold text-lg">0</span>
                <span className="text-base-content/70 ml-1">Reviews</span>
              </div>
              <div>
                <span className="font-bold text-lg">0</span>
                <span className="text-base-content/70 ml-1">Restaurants</span>
              </div>
              <div>
                <span className="font-bold text-lg">0</span>
                <span className="text-base-content/70 ml-1">Must-Try Picks</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Foodie's Reviews */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Reviews</h2>
        <div className="space-y-4">
          <div className="text-center py-8 text-base-content/70">
            No reviews yet.
          </div>
        </div>
      </section>
    </div>
  )
}
