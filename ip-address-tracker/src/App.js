import React from 'react'
import Footer from './footer'
import { FiChevronRight } from 'react-icons/fi'

function App() {
  return (
    <>
      <main className="App">
        <h1>IP Address Tracker</h1>

        <div className="background"></div>
        <form >
          <input type='text' placeholder='Search for any IP address or domain' name='location' id='location' autoFocus />
          <button><FiChevronRight /></button>
        </form>

        <div className='ip-info'>
          <article>
            <h3>IP Address</h3>
            <p>192.212.174.101</p>
          </article>

          <article>
            <h3>Location</h3>
            <p>Brooklyn, ms 10001</p>
          </article>

          <article>
            <h3> Timezone</h3>
            <p>UTC -05:33</p>
          </article>

          <article>
            <h3>ISP</h3>
            <p>SpaceX Starlink</p>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
