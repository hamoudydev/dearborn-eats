import { Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'

export function Navbar() {
  // TODO: Get user from Supabase auth
  const user = null
  const isAdmin = false

  const [theme, setTheme] = useState<'dim' | 'cupcake'>('dim')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dim' | 'cupcake' | null
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.setAttribute('data-theme', savedTheme)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dim' ? 'cupcake' : 'dim'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl font-bold text-primary">
            Dearborn Eats
          </Link>
        </div>

        <div className="flex-none hidden md:flex">
          <ul className="menu menu-horizontal px-1 gap-1">
            <li>
              <Link to="/restaurants" className="[&.active]:bg-primary [&.active]:text-white">
                Restaurants
              </Link>
            </li>
            <li>
              <Link to="/foodies" className="[&.active]:bg-primary [&.active]:text-white">
                Foodies
              </Link>
            </li>
            {isAdmin && (
              <li>
                <Link to="/admin" className="[&.active]:bg-primary [&.active]:text-white">
                  Admin
                </Link>
              </li>
            )}
          </ul>
        </div>

        <div className="flex items-center gap-2">
          {user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full bg-primary text-white flex items-center justify-center">
                  <span className="text-lg">U</span>
                </div>
              </div>
              <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li><a href="/profile">Profile</a></li>
                <li><a href="/profile/reviews">My Reviews</a></li>
                <li><a>Logout</a></li>
              </ul>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link to="/auth/login" className="btn btn-ghost btn-sm">
                Sign In
              </Link>
              <Link to="/auth/register" className="btn btn-primary btn-sm">
                Sign Up
              </Link>
            </div>
          )}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="btn btn-ghost btn-circle btn-sm"
            aria-label="Toggle theme"
          >
            {theme === 'dim' ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* Mobile menu */}
          <div className="dropdown dropdown-end md:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to="/restaurants">Restaurants</Link></li>
              <li><Link to="/foodies">Foodies</Link></li>
              {isAdmin && <li><Link to="/admin">Admin</Link></li>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
