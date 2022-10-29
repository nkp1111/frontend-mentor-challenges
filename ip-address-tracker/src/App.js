import React, { useRef, useState } from 'react'
import Footer from './footer'
import { FiChevronRight } from 'react-icons/fi'
import Map from './Map'
import IPtracker from './IPtracker'

function App() {

  const mapRef = useRef(null)

  const [ipaddress, setIpAddress] = useState('192.212.174.101')
  return (
    <>
      <main className="App">
        <h1>IP Address Tracker</h1>

        <div className="background"></div>
        <form onSubmit={(e) => {
          e.preventDefault()
          setIpAddress(e.target.value)
        }}>
          <input type='text' placeholder='Search for any IP address or domain' name='location' id='location' autoFocus />
          <button><FiChevronRight /></button>
        </form>

        <div ref={mapRef}></div>
        {/* <Map /> */}
        <IPtracker ipaddress={ipaddress} />
      </main>
      <Footer />
    </>
  );
}

export default App;
