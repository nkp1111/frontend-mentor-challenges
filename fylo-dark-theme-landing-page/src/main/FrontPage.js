import React from 'react'
import { illustrationIntro } from '../assets/data'

function FrontPage() {
  return (
    <div className='front-page 
    flex-body-center 
    text-center'>
      {/* front page info  */}
      <div className="info order-2">
        <h1 className='main-heading'>
          All your files in one secure location, accessible anywhere.
        </h1>
        <p>
          Fylo stores all your most important files in one secure location. Access them wherever
          you need, share and collaborate with friends family, and co-workers.
        </p>
        <button className="btn">Get Started</button>
      </div>
      {/* front page image  */}
      <div className="hero-img">
        <img src={illustrationIntro} alt="." />
      </div>
    </div>
  )
}

export default FrontPage
