import React from 'react'
import { interactiveDesktop, interactiveMobile } from '../assets/data'

function InfoSection() {
  return (
    <section className='info-section'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='info-text col-md-6 order-2'>
            <h2 className='section-heading'>The leader in interactive VR</h2>
            <p>
              Founded in 2011, Loopstudios has been producing world-class virtual reality
              projects for some of the best companies around the globe. Our award-winning
              creations have transformed businesses through digital experiences that bind
              to their brand.
            </p>
          </div>
          <div className='info-image col-md-6 order-1'>
            <picture>
              <source srcSet={interactiveDesktop}
                media="(min-width:49rem)"></source>
              <img src={interactiveMobile} alt="interactive mobile" aria-hidden="true"></img>
            </picture>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfoSection
