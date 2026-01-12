import { createFileRoute, Link } from '@tanstack/react-router'
import { FoodieCard } from '~/components/FoodieCard'
import { useFoodies } from '~/lib/hooks'

export const Route = createFileRoute('/foodies')({
  component: FoodiesPage,
})

function FoodiesPage() {
  const { data: foodies, isLoading } = useFoodies()

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-2">Meet the Foodies</h1>
        <p className="text-base-content/70 max-w-2xl mx-auto">
          Our verified local food reviewers know Dearborn's food scene inside and out.
          Their reviews help you discover the best dishes in town.
        </p>
      </div>

      {!foodies || foodies.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">👨‍🍳</div>
          <h2 className="text-2xl font-bold mb-2">Foodies coming soon</h2>
          <p className="text-base-content/70">We're onboarding local food reviewers. Check back soon!</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {foodies.map((foodie) => (
            <FoodieCard key={foodie.id} foodie={foodie} />
          ))}
        </div>
      )}

      {/* Become a Foodie CTA */}
      <section className="mt-16 bg-primary/10 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-2">Want to become a Foodie?</h2>
        <p className="text-base-content/70 mb-4 max-w-xl mx-auto">
          Are you passionate about Dearborn's food scene? Apply to become a verified foodie
          and share your reviews with the community.
        </p>
        <Link to="/auth/register" className="btn btn-primary">Apply Now</Link>
      </section>
    </div>
  )
}
