import React from 'react'
import { navbarData, logoIcon } from '../assets/data'
import hamburgerIcon from '../assets/images/icon-hamburger.svg'
import NavItems from './NavItems'


function Header() {
  return (
    <header>
      {/* navbar  */}
      <nav className='navbar navbar-expand-sm'>

        {/* navbar logo  */}
        <img src={logoIcon} alt="room logo" className='navbar-brand' />

        {/* navbar button toggler  */}
        <button className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#headerNavbar">
          <img src={hamburgerIcon} alt="hamburger menu" />
        </button>

        {/* navbar items (collapsable)  */}
        <NavItems navbarData={navbarData} />
      </nav>
    </header>
  )
}

export default Header
