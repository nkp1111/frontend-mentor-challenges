import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function SimpleMap({ ipaddress, setError }) {

  const [lat, setLat] = useState('34.0648')
  const [long, setLong] = useState('-118.086')

  const coordUrl = `http://ip-api.com/json/${ipaddress}`

  useEffect(() => {
    fetch(coordUrl)
      .then(res => res.json())
      .then(data => {
        setLocation(data)
      })
  })

  const setLocation = (data) => {
    if (data.status === 'fail') {
      setError(true)
    } else {
      setLat(data.lat)
      setLong(data.lon)
      console.log(data)
    }
  }

  return (
    <MapContainer center={[lat, long]} zoom={8} scrollWheelZoom={true} >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, long]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default SimpleMap







