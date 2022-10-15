import React from 'react'
import useGlobalContext from './context';
import Header from './Header';

function App() {

  const { seconds, minutes, hours, days } = useGlobalContext()

  // console.log(state)
  return (
    <>
      <Header />
      <section>
        <h2>We're launching soon</h2>
        <div className='timer'>
          <div>{days}</div>
          <div>{hours}</div>
          <div>{minutes}</div>
          <div>{seconds}</div>
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
