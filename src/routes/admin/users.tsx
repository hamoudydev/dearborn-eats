import { createFileRoute } from '@tanstack/react-router'
import { useAllUsers, useUpdateUserRole } from '~/lib/hooks'

export const Route = createFileRoute('/admin/users')({
  component: AdminUsersPage,
})

function AdminUsersPage() {
  const { data: users, isLoading } = useAllUsers()
  const updateUserRole = useUpdateUserRole()

  const handleRoleChange = (userId: string, newRole: 'admin' | 'foodie' | 'public') => {
    updateUserRole.mutate({ userId, role: newRole })
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    )
  }

  const getRoleBadgeClass = (role: string) => {
    switch (role) {
      case 'admin': return 'badge-error'
      case 'foodie': return 'badge-primary'
      default: return 'badge-ghost'
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Manage Users</h1>
        <p className="text-base-content/70">{users?.length || 0} users</p>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Verified</th>
              <th>Joined</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr key={user.id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="w-10 h-10 rounded-full bg-base-300 flex items-center justify-center">
                        {user.avatar_url ? (
                          <img src={user.avatar_url} alt={user.display_name} />
                        ) : (
                          <span className="text-lg">👤</span>
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.display_name}</div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>
                  <span className={`badge ${getRoleBadgeClass(user.role)} badge-sm`}>
                    {user.role}
                  </span>
                </td>
                <td>
                  {user.is_verified ? (
                    <span className="text-success">✓</span>
                  ) : (
                    <span className="text-base-content/50">-</span>
                  )}
                </td>
                <td className="text-sm text-base-content/70">
                  {new Date(user.created_at).toLocaleDateString()}
                </td>
                <td>
                  <select
                    className="select select-bordered select-xs"
                    value={user.role}
                    onChange={(e) => handleRoleChange(user.id, e.target.value as 'admin' | 'foodie' | 'public')}
                    disabled={updateUserRole.isPending}
                  >
                    <option value="public">Public</option>
                    <option value="foodie">Foodie</option>
                    <option value="admin">Admin</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {(!users || users.length === 0) && (
        <div className="text-center py-12 text-base-content/70">
          No users found.
        </div>
      )}
    </div>
  )
}
