import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/')({
  component: AdminDashboard,
})

function AdminDashboard() {
  // TODO: Add auth check - redirect if not admin

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="stat bg-base-200 rounded-lg">
          <div className="stat-title">Restaurants</div>
          <div className="stat-value text-primary">0</div>
        </div>
        <div className="stat bg-base-200 rounded-lg">
          <div className="stat-title">Reviews</div>
          <div className="stat-value text-secondary">0</div>
        </div>
        <div className="stat bg-base-200 rounded-lg">
          <div className="stat-title">Foodies</div>
          <div className="stat-value text-accent">0</div>
        </div>
        <div className="stat bg-base-200 rounded-lg">
          <div className="stat-title">Users</div>
          <div className="stat-value">0</div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Manage Restaurants */}
        <div className="card bg-base-200">
          <div className="card-body">
            <h2 className="card-title">Restaurants</h2>
            <p className="text-base-content/70">Add, edit, or remove restaurants</p>
            <div className="card-actions mt-4">
              <a href="/admin/restaurants" className="btn btn-primary btn-sm">Manage</a>
              <a href="/admin/restaurants/new" className="btn btn-outline btn-sm">Add New</a>
            </div>
          </div>
        </div>

        {/* Manage Foodies */}
        <div className="card bg-base-200">
          <div className="card-body">
            <h2 className="card-title">Food Reviewers</h2>
            <p className="text-base-content/70">Approve or manage foodie accounts</p>
            <div className="card-actions mt-4">
              <a href="/admin/foodies" className="btn btn-primary btn-sm">Manage</a>
              <span className="badge badge-warning">0 pending</span>
            </div>
          </div>
        </div>

        {/* Manage Reviews */}
        <div className="card bg-base-200">
          <div className="card-body">
            <h2 className="card-title">Reviews</h2>
            <p className="text-base-content/70">Moderate reviews and comments</p>
            <div className="card-actions mt-4">
              <a href="/admin/reviews" className="btn btn-primary btn-sm">View All</a>
              <span className="badge badge-info">0 flagged</span>
            </div>
          </div>
        </div>

        {/* Manage Users */}
        <div className="card bg-base-200">
          <div className="card-body">
            <h2 className="card-title">Users</h2>
            <p className="text-base-content/70">Manage user accounts</p>
            <div className="card-actions mt-4">
              <a href="/admin/users" className="btn btn-primary btn-sm">Manage</a>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="card bg-base-200">
          <div className="card-body">
            <h2 className="card-title">Menu Items</h2>
            <p className="text-base-content/70">Manage menu recommendations</p>
            <div className="card-actions mt-4">
              <a href="/admin/menu-items" className="btn btn-primary btn-sm">Manage</a>
            </div>
          </div>
        </div>

        {/* Site Settings */}
        <div className="card bg-base-200">
          <div className="card-body">
            <h2 className="card-title">Settings</h2>
            <p className="text-base-content/70">Site configuration</p>
            <div className="card-actions mt-4">
              <a href="/admin/settings" className="btn btn-primary btn-sm">Configure</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
