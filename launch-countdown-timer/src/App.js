import React from 'react'
import Header from './Header';

function App() {
  return (
    <>
      <Header />
      <section>
        <h2>We're launching soon</h2>
        <div className='timer'>
          <div>08</div>
          <div>23</div>
          <div>55</div>
          <div>41</div>
          <div>Days</div>
          <div>Hours</div>
          <div>Minutes</div>
          <div>Seconds</div>
        </div>
        <div className='mountain-bed'></div>
      </section>
    </>
  );
}

export default App;
