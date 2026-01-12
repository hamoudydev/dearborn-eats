import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Suspense } from 'react'
import { Navbar } from '~/components/Navbar'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />
      <main>
        <Suspense fallback={
          <div className="flex justify-center items-center h-screen">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        }>
          <Outlet />
        </Suspense>
      </main>
      {import.meta.env.DEV && <TanStackRouterDevtools />}
    </div>
  )
}
