import React, { useRef } from 'react'
import Footer from './footer'
import { FiChevronRight } from 'react-icons/fi'
import Map from './Map'
import IPtracker from './IPtracker'

function App() {

  const mapRef = useRef(null)
  return (
    <>
      <main className="App">
        <h1>IP Address Tracker</h1>

        <div className="background"></div>
        <form >
          <input type='text' placeholder='Search for any IP address or domain' name='location' id='location' autoFocus />
          <button><FiChevronRight /></button>
        </form>

        <div ref={mapRef}></div>

        <IPtracker />
      </main>
      <Footer />
    </>
  );
}

export default App;
