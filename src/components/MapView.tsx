import { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import { useRestaurants } from '~/lib/hooks'

const DEARBORN_CENTER: [number, number] = [-83.1763, 42.3223]
const DEFAULT_ZOOM = 12

export function MapView() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const markersRef = useRef<mapboxgl.Marker[]>([])

  const { data: restaurants } = useRestaurants()

  useEffect(() => {
    if (!mapContainer.current || map.current) return

    const token = import.meta.env.VITE_MAPBOX_TOKEN
    if (!token) {
      console.error('Mapbox token not found')
      return
    }

    mapboxgl.accessToken = token

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: DEARBORN_CENTER,
      zoom: DEFAULT_ZOOM,
    })

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right')
    map.current.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: { enableHighAccuracy: true },
        trackUserLocation: true,
      }),
      'top-right'
    )

    return () => {
      map.current?.remove()
      map.current = null
    }
  }, [])

  // Add markers when restaurants data loads
  useEffect(() => {
    if (!map.current || !restaurants) return

    // Clear existing markers
    markersRef.current.forEach(marker => marker.remove())
    markersRef.current = []

    // Add new markers
    restaurants.forEach(restaurant => {
      const el = document.createElement('div')
      el.className = 'marker'
      el.style.cssText = `
        width: 32px;
        height: 32px;
        background-color: ${restaurant.is_food_truck ? '#f59e0b' : '#1a5f2a'};
        border: 3px solid white;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        box-shadow: 0 2px 6px rgba(0,0,0,0.3);
      `
      el.innerHTML = restaurant.is_food_truck ? '🚚' : '🍽️'

      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
        <div style="padding: 8px; min-width: 200px;">
          <h3 style="font-weight: bold; font-size: 16px; margin-bottom: 4px;">${restaurant.name}</h3>
          <p style="color: #666; font-size: 12px; margin-bottom: 4px;">${restaurant.cuisine} • ${restaurant.price_range}</p>
          <p style="color: #888; font-size: 11px; margin-bottom: 8px;">${restaurant.address}</p>
          <a href="/restaurants/${restaurant.slug}" style="color: #1a5f2a; font-size: 12px; text-decoration: underline;">View Details →</a>
        </div>
      `)

      const marker = new mapboxgl.Marker(el)
        .setLngLat([restaurant.longitude, restaurant.latitude])
        .setPopup(popup)
        .addTo(map.current!)

      markersRef.current.push(marker)
    })
  }, [restaurants])

  return (
    <div ref={mapContainer} className="w-full h-full" />
  )
}
