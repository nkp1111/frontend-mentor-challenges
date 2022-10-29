import React, { useEffect, useState } from 'react'

function IPtracker() {

  const url = 'https://geo.ipify.org/api/v2/country?apiKey=at_XByZkQe8ilIXwZg93f7InDI0pfYr2&ipAddress=192.212.174.101'

  const [ipaddress, setIpAddress] = useState('192.212.174.101')
  const [location, setLocation] = useState('Brooklyn, NY 10001')
  const [timezone, setTimezone] = useState('-05:33')
  const [isp, setIsp] = useState('SpaceX Starlink')

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
  })

  const setData = (data) => {
    console.log(data)
  }

  return (
    <div className='ip-info'>
      <article>
        <h3>IP Address</h3>
        <p>{ipaddress}</p>
      </article>

      <article>
        <h3>Location</h3>
        <p>{location}</p>
      </article>

      <article>
        <h3> Timezone</h3>
        <p>UTC {timezone}</p>
      </article>

      <article>
        <h3>ISP</h3>
        <p>{isp}</p>
      </article>
    </div>
  )
}

export default IPtracker
