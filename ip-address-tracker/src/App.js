import React from 'react'
import Footer from './footer'
import { FiChevronRight } from 'react-icons/fi'

function App() {
  return (
    <>
      <main className="App">
        <h1>IP Address Tracker</h1>

        <div className="background"></div>
        <form>
          <input type='text' placeholder='Search for any IP address or domain' name='location' id='location' />
          <button><FiChevronRight /></button>
        </form>

        <article>
          <h3>IP Address</h3>
          <p></p>
        </article>

        <article>
          <h3>Location</h3>
          <p></p>
        </article>

        <article>
          <h3> Timezone</h3>
          <p>UTC</p>
        </article>

        <article>
          <h3>ISP</h3>
          <p></p>
        </article>

      </main>
      <Footer />
    </>
  );
}

export default App;
