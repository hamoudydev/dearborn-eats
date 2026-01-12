import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'
import { useCreateRestaurant } from '~/lib/hooks'

export const Route = createFileRoute('/admin/restaurants/new')({
  component: NewRestaurantPage,
})

function NewRestaurantPage() {
  const navigate = useNavigate()
  const createRestaurant = useCreateRestaurant()
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')

    const formData = new FormData(e.currentTarget)
    const name = formData.get('name') as string
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

    try {
      await createRestaurant.mutateAsync({
        name,
        slug,
        description: formData.get('description') as string || null,
        cuisine: formData.get('cuisine') as string,
        price_range: formData.get('price_range') as string,
        address: formData.get('address') as string,
        city: 'Dearborn',
        state: 'MI',
        zip_code: formData.get('zip_code') as string,
        phone: formData.get('phone') as string || null,
        website: formData.get('website') as string || null,
        latitude: parseFloat(formData.get('latitude') as string),
        longitude: parseFloat(formData.get('longitude') as string),
        image_url: formData.get('image_url') as string || null,
        is_food_truck: formData.get('is_food_truck') === 'on',
        is_active: true,
      })
      navigate({ to: '/admin/restaurants' })
    } catch (err: any) {
      setError(err.message || 'Failed to create restaurant')
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-8">Add New Restaurant</h1>

      {error && (
        <div className="alert alert-error mb-6">
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="form-control">
          <label className="label"><span className="label-text">Name *</span></label>
          <input type="text" name="name" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label"><span className="label-text">Description</span></label>
          <textarea name="description" className="textarea textarea-bordered" rows={3} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label"><span className="label-text">Cuisine *</span></label>
            <select name="cuisine" className="select select-bordered" required>
              <option value="">Select cuisine</option>
              <option value="Middle Eastern">Middle Eastern</option>
              <option value="Lebanese">Lebanese</option>
              <option value="Iraqi">Iraqi</option>
              <option value="Yemeni">Yemeni</option>
              <option value="Mediterranean">Mediterranean</option>
              <option value="American">American</option>
              <option value="Mexican">Mexican</option>
              <option value="Asian">Asian</option>
              <option value="Bakery">Bakery</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label"><span className="label-text">Price Range *</span></label>
            <select name="price_range" className="select select-bordered" required>
              <option value="$">$ - Budget</option>
              <option value="$$">$$ - Moderate</option>
              <option value="$$$">$$$ - Upscale</option>
              <option value="$$$$">$$$$ - Fine Dining</option>
            </select>
          </div>
        </div>

        <div className="form-control">
          <label className="label"><span className="label-text">Address *</span></label>
          <input type="text" name="address" className="input input-bordered" placeholder="123 Michigan Ave" required />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label"><span className="label-text">ZIP Code *</span></label>
            <input type="text" name="zip_code" className="input input-bordered" placeholder="48126" required />
          </div>

          <div className="form-control">
            <label className="label"><span className="label-text">Phone</span></label>
            <input type="text" name="phone" className="input input-bordered" placeholder="(313) 555-1234" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label"><span className="label-text">Latitude *</span></label>
            <input type="number" step="any" name="latitude" className="input input-bordered" placeholder="42.3223" required />
          </div>

          <div className="form-control">
            <label className="label"><span className="label-text">Longitude *</span></label>
            <input type="number" step="any" name="longitude" className="input input-bordered" placeholder="-83.1763" required />
          </div>
        </div>

        <div className="form-control">
          <label className="label"><span className="label-text">Website</span></label>
          <input type="url" name="website" className="input input-bordered" placeholder="https://example.com" />
        </div>

        <div className="form-control">
          <label className="label"><span className="label-text">Image URL</span></label>
          <input type="url" name="image_url" className="input input-bordered" placeholder="https://example.com/image.jpg" />
        </div>

        <div className="form-control">
          <label className="label cursor-pointer justify-start gap-4">
            <input type="checkbox" name="is_food_truck" className="checkbox" />
            <span className="label-text">This is a food truck</span>
          </label>
        </div>

        <div className="flex gap-4 pt-4">
          <button type="submit" className="btn btn-primary" disabled={createRestaurant.isPending}>
            {createRestaurant.isPending ? 'Creating...' : 'Create Restaurant'}
          </button>
          <button type="button" className="btn btn-ghost" onClick={() => navigate({ to: '/admin/restaurants' })}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}
