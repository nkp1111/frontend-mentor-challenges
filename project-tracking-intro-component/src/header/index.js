import React from 'react'
import { logo, navData, iconClose, iconHamburger } from '../assets/data'
import "./header.css"
import NavbarLogo from './NavbarLogo'
import NavbarTogglerBtn from './NavbarTogglerBtn'
import NavbarCollapsableItems from './NavbarCollapsableItems'

function index() {
  return (
    <header className='header'>
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid">
          {/* navbar logo  */}
          <NavbarLogo logo={logo} />

          {/* navbar toggler  */}
          <NavbarTogglerBtn {...{ iconClose, iconHamburger }} />

          {/* navbar items  */}
          <NavbarCollapsableItems navData={navData} />

        </div>
      </nav>
    </header>
  )
}

export default index
