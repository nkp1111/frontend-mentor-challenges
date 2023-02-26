import React from 'react'

function FrontPage({ introDesktop, introMobile }) {

  return (
    <div className="row front-page" >
      {/* main info  */}
      <div className="front-background"></div>

      <div className="col-md-6 front-page-text" >
        <h1 className='main-heading'>Humanizing your insurance.</h1>
        <p>
          Get your life insurance coverage easier and faster. We blend our expertise
          and technology to help you find the plan that’s right for you. Ensure you
          and your loved ones are protected.
        </p>
        <button className="btn">View plans</button>
      </div>
      {/* main image   */}
      <div className="col-md-6 front-page-img">
        <picture>
          <source srcSet={introMobile} media='(max-width: 48rem)' />
          <img src={introDesktop} alt="hero" />
        </picture>
      </div>
    </div>
  )
}

export default FrontPage
