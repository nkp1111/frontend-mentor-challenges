import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


const position = [51.505, -0.09]

function SimpleMap({ ipaddress }) {

  const [lat, setLat] = useState('51.505')
  const [long, setLong] = useState('-0.09')

  const coordUrl = `http://ip-api.com/json/${ipaddress}`

  useEffect(() => {
    fetch(coordUrl)
      .then(res => res.json())
      .then(data => {
        setLocation(data)
      })
  })

  const setLocation = (data) => {
    setLat(data.lat)
    setLong(data.lon)
    console.log(data)
  }

  return (
    <MapContainer center={[lat, long]} zoom={13} scrollWheelZoom={false}>
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







