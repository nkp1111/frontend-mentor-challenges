import React, { useEffect, useState } from 'react'
import Footer from './footer'
import Map from './Map'
import IpControls from './IpControls'
import IPtracker from './IPtracker'

function App() {
  const [ipaddress, setIpAddress] = useState('192.212.174.101')
  const [error, setError] = useState(false)

  useEffect(() => {
    if (error === true) {
      console.log(error)
      setTimeout(() => {
        setError(false)
        setIpAddress('192.212.174.101')
        console.log(error)
      }, 1500)
    }
  }, [error])

  return (
    <>
      <main className={error ? 'error' : ''}>
        <h1>IP Address Tracker</h1>
        <IpControls setIpAddress={setIpAddress} />
        <IPtracker ipaddress={ipaddress} setError={setError} />
        <Map ipaddress={ipaddress} setError={setError} />
      </main>
      <Footer />
    </>
  );
}

export default App;
