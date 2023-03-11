import React from 'react'
import { headerLogoDesktop, headerLogoMobile, logo } from '../assets/data'

function FrontPage() {
  return (
    <div className='front-page d-flex flex-column'>
      {/* front page info  */}
      <div className="info order-2">
        <h1 className='main-heading'>A history of everything you copy</h1>
        <p>
          Clipboard allows you to track and organize everything you
          copy. Instantly access your clipboard on all your devices.
        </p>
        <div className="btn-holder">
          <button className="btn">Download for iOS</button>
          <button className="btn">Download for Mac</button>
        </div>
      </div>
      {/* front page image  */}
      <div className="img-holder">
        <img src={logo} alt="logo" className='logo' />
        <picture>
          <source srcSet={headerLogoMobile} media="(max-width: 48rem)" />
          <img src={headerLogoDesktop} alt="header background" />
        </picture>
      </div>
    </div>
  )
}

export default FrontPage
