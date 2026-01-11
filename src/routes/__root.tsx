import { createRootRoute } from '@tanstack/react-router'
import { Meta, Outlet, Scripts, ScrollRestoration } from '@tanstack/start'
import { Suspense } from 'react'
import { Navbar } from '~/components/Navbar'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Dearborn Eats - Local Food Reviews' },
      { name: 'description', content: 'Discover the best restaurants and food trucks in Dearborn, MI with reviews from local foodies.' },
    ],
    links: [
      { rel: 'icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://api.mapbox.com/mapbox-gl-js/v3.8.0/mapbox-gl.css' },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <html lang="en" data-theme="dearborneats">
      <head>
        <Meta />
      </head>
      <body className="min-h-screen bg-base-100">
        <Navbar />
        <main>
          <Suspense fallback={<div className="flex justify-center items-center h-screen"><span className="loading loading-spinner loading-lg"></span></div>}>
            <Outlet />
          </Suspense>
        </main>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}
