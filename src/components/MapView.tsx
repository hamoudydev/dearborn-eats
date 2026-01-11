import { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'

const DEARBORN_CENTER: [number, number] = [-83.1763, 42.3223]
const DEFAULT_ZOOM = 13

export function MapView() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)

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

    // TODO: Load restaurants from Supabase and add markers

    return () => {
      map.current?.remove()
      map.current = null
    }
  }, [])

  return (
    <div ref={mapContainer} className="w-full h-full" />
  )
}
