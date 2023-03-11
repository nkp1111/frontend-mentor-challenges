import React from 'react'
import { headerLogoDesktop, headerLogoMobile, logo } from '../assets/data'
import "./header.css"

function index() {
  return (
    <header>
      <img src={logo} alt="logo" className='logo' />
      <div className="img-holder">
        <picture>
          <source srcSet={headerLogoMobile} media="(max-width: 48rem)" />
          <img src={headerLogoDesktop} alt="header background" />
        </picture>
      </div>
    </header>
  )
}

export default index
