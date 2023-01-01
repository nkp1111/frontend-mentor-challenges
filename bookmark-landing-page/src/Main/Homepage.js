import React from 'react'
import { illustrationHeroImage } from '../assets/data'

function Homepage() {
  return (
    <div className='front-page container-fluid'>
      <div className='row'>

        {/* info grid  */}
        <div className='col-md-6'>
          <h1>A Simple Bookmark Manager</h1>
          <p>
            A clean and simple interface to organize your favourite websites. Open a new
            browser tab and see your sites load instantly. Try it for free.
          </p>
          <div className='btn-holder'>
            <button className='btn'>
              Get it on Chrome
            </button>
            <button className='btn'>
              Get it on Firefox
            </button>
          </div>
        </div>

        {/* image grid  */}
        <div className='col-md-6'>
          <div className='row'>
            <div className='col-12'>
              <div className='bg-illustration'></div>
              <img src={illustrationHeroImage} alt="hero background" ></img>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Homepage
