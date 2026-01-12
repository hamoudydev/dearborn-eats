import { createFileRoute, Link } from '@tanstack/react-router'
import { useAdminStats, usePendingApplications, useApproveApplication } from '~/lib/hooks'

export const Route = createFileRoute('/admin/')({
  component: AdminDashboard,
})

function AdminDashboard() {
  const { data: stats, isLoading } = useAdminStats()
  const { data: pendingApps } = usePendingApplications()
  const approveApplication = useApproveApplication()

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="stat bg-base-200 rounded-lg">
          <div className="stat-title">Restaurants</div>
          <div className="stat-value text-primary">{stats?.restaurantCount || 0}</div>
        </div>
        <div className="stat bg-base-200 rounded-lg">
          <div className="stat-title">Reviews</div>
          <div className="stat-value text-secondary">{stats?.reviewCount || 0}</div>
        </div>
        <div className="stat bg-base-200 rounded-lg">
          <div className="stat-title">Foodies</div>
          <div className="stat-value text-accent">{stats?.foodieCount || 0}</div>
        </div>
        <div className="stat bg-base-200 rounded-lg">
          <div className="stat-title">Users</div>
          <div className="stat-value">{stats?.userCount || 0}</div>
        </div>
      </div>

      {/* Pending Applications */}
      {pendingApps && pendingApps.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            Pending Foodie Applications
            <span className="badge badge-warning">{pendingApps.length}</span>
          </h2>
          <div className="space-y-4">
            {pendingApps.map((app: any) => (
              <div key={app.id} className="card bg-base-200">
                <div className="card-body">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold">{app.user?.display_name || 'Unknown'}</h3>
                      <p className="text-sm text-base-content/70">{app.user?.email}</p>
                      <p className="mt-2">{app.application_text}</p>
                      <p className="text-xs text-base-content/50 mt-2">
                        Applied: {new Date(app.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        className="btn btn-success btn-sm"
                        onClick={() => approveApplication.mutate({ applicationId: app.id, approved: true })}
                        disabled={approveApplication.isPending}
                      >
                        Approve
                      </button>
                      <button
                        className="btn btn-error btn-sm"
                        onClick={() => approveApplication.mutate({ applicationId: app.id, approved: false })}
                        disabled={approveApplication.isPending}
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Manage Restaurants */}
        <div className="card bg-base-200">
          <div className="card-body">
            <h2 className="card-title">Restaurants</h2>
            <p className="text-base-content/70">Add, edit, or remove restaurants</p>
            <div className="card-actions mt-4">
              <Link to="/admin/restaurants" className="btn btn-primary btn-sm">Manage</Link>
              <Link to="/admin/restaurants/new" className="btn btn-outline btn-sm">Add New</Link>
            </div>
          </div>
        </div>

        {/* Manage Users */}
        <div className="card bg-base-200">
          <div className="card-body">
            <h2 className="card-title">Users</h2>
            <p className="text-base-content/70">Manage user accounts and roles</p>
            <div className="card-actions mt-4">
              <Link to="/admin/users" className="btn btn-primary btn-sm">Manage</Link>
            </div>
          </div>
        </div>

        {/* View Reviews */}
        <div className="card bg-base-200">
          <div className="card-body">
            <h2 className="card-title">Reviews</h2>
            <p className="text-base-content/70">View all reviews</p>
            <div className="card-actions mt-4">
              <Link to="/restaurants" className="btn btn-primary btn-sm">View</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
