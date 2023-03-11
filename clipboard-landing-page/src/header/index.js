import React from 'react'
import { headerLogoDesktop, headerLogoMobile, logo } from '../assets/data'

function index() {
  return (
    <header>
      <div className="img-holder">
        <img src={logo} alt="logo" className='logo' />
        <picture>
          <source srcSet={headerLogoMobile} media="(max-width: 48rem)" />
          <img src={headerLogoDesktop} alt="header background" />
        </picture>
      </div>
    </header>
  )
}

export default index
