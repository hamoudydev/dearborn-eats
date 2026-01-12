import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { useAllRestaurants, useDeleteRestaurant, useUpdateRestaurant } from '~/lib/hooks'

export const Route = createFileRoute('/admin/restaurants')({
  component: AdminRestaurantsPage,
})

function AdminRestaurantsPage() {
  const { data: restaurants, isLoading } = useAllRestaurants()
  const deleteRestaurant = useDeleteRestaurant()
  const updateRestaurant = useUpdateRestaurant()
  const [deleteId, setDeleteId] = useState<string | null>(null)

  const handleDelete = async (id: string) => {
    await deleteRestaurant.mutateAsync(id)
    setDeleteId(null)
  }

  const toggleActive = (id: string, currentStatus: boolean) => {
    updateRestaurant.mutate({ id, is_active: !currentStatus })
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Manage Restaurants</h1>
          <p className="text-base-content/70">{restaurants?.length || 0} restaurants</p>
        </div>
        <Link to="/admin/restaurants/new" className="btn btn-primary">
          Add Restaurant
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Name</th>
              <th>Cuisine</th>
              <th>Type</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {restaurants?.map((restaurant) => (
              <tr key={restaurant.id}>
                <td>
                  <div>
                    <div className="font-bold">{restaurant.name}</div>
                    <div className="text-sm text-base-content/70">{restaurant.address}</div>
                  </div>
                </td>
                <td>{restaurant.cuisine}</td>
                <td>
                  {restaurant.is_food_truck ? (
                    <span className="badge badge-secondary badge-sm">Food Truck</span>
                  ) : (
                    <span className="badge badge-ghost badge-sm">Restaurant</span>
                  )}
                </td>
                <td>
                  <button
                    className={`badge ${restaurant.is_active ? 'badge-success' : 'badge-error'} badge-sm cursor-pointer`}
                    onClick={() => toggleActive(restaurant.id, restaurant.is_active)}
                  >
                    {restaurant.is_active ? 'Active' : 'Inactive'}
                  </button>
                </td>
                <td>
                  <div className="flex gap-2">
                    <Link
                      to="/admin/restaurants/$id"
                      params={{ id: restaurant.id }}
                      className="btn btn-ghost btn-xs"
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-ghost btn-xs text-error"
                      onClick={() => setDeleteId(restaurant.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteId && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Confirm Delete</h3>
            <p className="py-4">Are you sure you want to delete this restaurant? This action cannot be undone.</p>
            <div className="modal-action">
              <button className="btn" onClick={() => setDeleteId(null)}>Cancel</button>
              <button
                className="btn btn-error"
                onClick={() => handleDelete(deleteId)}
                disabled={deleteRestaurant.isPending}
              >
                {deleteRestaurant.isPending ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
