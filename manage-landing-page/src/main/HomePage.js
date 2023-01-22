import React from 'react'
import { illustrationImage } from '../assets/data'

function HomePage() {
  return (
    <div className='home-page container-fluid'>
      <div className='row'>
        <div className='text-portion col-md-6 order-2'>
          <h1 className='main-heading'>Bring everyone together to build better products.</h1>
          <p>
            Manage makes it simple for software teams to plan day-to-day
            tasks while keeping the larger team goals in view.
          </p>
          <div className='btn-holder'>
            <button className='btn btn-orange'>Get Started</button>
          </div>

        </div>

        <div className='image-portion col-md-6 order-1'>
          {/* home page images */}
          <div className='image-holder'>
            <img src={illustrationImage} alt="illustration"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
