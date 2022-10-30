import React, { useEffect, useState } from 'react'

function IPtracker({ ipaddress, setError }) {

  const [location, setLocation] = useState('Brooklyn, NY 10001')
  const [timezone, setTimezone] = useState('-05:33')
  const [isp, setIsp] = useState('SpaceX Starlink')

  useEffect(() => {
    const url = `https://geo.ipify.org/api/v2/country?apiKey=at_XByZkQe8ilIXwZg93f7InDI0pfYr2&ipAddress=${ipaddress}`
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
  }, [ipaddress])

  const setData = (data) => {
    console.log(data)
    if (data.code === 422) {
      setError(true)
    } else {
      setError(false)
      setLocation(`${data.location.region}, ${data.location.country}`)
      setTimezone(data.location.timezone)
      setIsp(data.isp)
    }
  }

  return (
    <>
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
    </>
  )
}

export default IPtracker
