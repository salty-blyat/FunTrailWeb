import React from 'react'

interface MapEmbedProps {
  address: string
  zoom?: number
  width?: number
  height?: number
}

export default function MapEmbed({ address, zoom = 14, width = 300, height = 200 }: MapEmbedProps) {
  const encodedAddress = encodeURIComponent(address)
  const src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&libraries=maps&v=beta"

  return (
    <div className="rounded-lg overflow-hidden shadow-md">
      <iframe
        width={width}
        height={height}
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={src}
      ></iframe>
    </div>
  )
}

// Example usage
function PageLayout() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Map Embed Example</h1>
      <MapEmbed address="1600 Amphitheatre Parkway, Mountain View, CA" />
    </div>
  )
}