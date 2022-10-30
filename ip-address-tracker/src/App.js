import React, { useState } from 'react'
import Footer from './footer'
import Map from './Map'
import IpControls from './IpControls'
import IPtracker from './IPtracker'

function App() {
  const [ipaddress, setIpAddress] = useState('192.212.174.101')

  return (
    <>
      <main className="App">
        <h1>IP Address Tracker</h1>
        <IpControls setIpAddress={setIpAddress} />
        <IPtracker ipaddress={ipaddress} />
        <Map ipaddress={ipaddress} />
      </main>
      <Footer />
    </>
  );
}

export default App;
