import React from 'react'
import { illustrationMockups } from '../assets/data'

function FrontPage() {
  return (
    <div className='front-page'>
      <div className="row align-items-center">
        <div className="col-md-6">
          {/* front page info  */}
          <h1 className='main-heading'>Build The Community Your Fans Will Love</h1>
          <p>
            Huddle re-imagines the way we build communities. You have a voice, but so does your audience.
            Create connections with your users as you engage in genuine discussion.
          </p>
          <button className="btn huddle-btn">Get Started For Free</button>
        </div>
        <div className="col-md-6">
          {/* front page image */}
          <img src={illustrationMockups} alt="." />
        </div>
      </div>
    </div>
  )
}

export default FrontPage
