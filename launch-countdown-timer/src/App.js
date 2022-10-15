import React from 'react'
import useGlobalContext from './context';
import Header from './Header';
import { data } from './assets/data'
import facebookLogo from './assets/images/icon-facebook.svg'
import instagramLogo from './assets/images/icon-instagram.svg'
import pinterestLogo from './assets/images/icon-pinterest.svg'

function App() {

  const { seconds, minutes, hours, days } = useGlobalContext()

  // console.log(state)
  return (
    <>
      <Header />
      <section>
        <h2>We're launching soon</h2>
        <div className='timer'>
          <div className='time'>{days}</div>
          <div className='time'>{hours}</div>
          <div className='time'>{minutes}</div>
          <div className='time'>{seconds}</div>
          {data.map(d => {
            return (
              <div className='title'
                key={d}>{d}</div>
            )
          })}
        </div>
        <div className='mountain-bed'>
          <img src={facebookLogo} alt='facebook logo' />
          <img src={pinterestLogo} alt='pinterest logo' />
          <img src={instagramLogo} alt='instagram logo' />
        </div>
      </section>
    </>
  );
}

export default App;
