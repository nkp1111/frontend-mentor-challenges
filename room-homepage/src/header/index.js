import React from 'react'
import { navbarData } from '../assets/data'
import logo from '../assets/images/logo.svg'
import hamburgerIcon from '../assets/images/icon-hamburger.svg'


function Header() {
  return (
    <header>
      <nav className='navbar navbar-expand-sm'>
        <img src={logo} alt="room logo" className='navbar-brand' />
        <button className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#headerNavbar">
          <img src={hamburgerIcon} alt="hamburger menu" />
        </button>
        <div id="headerNavbar" className='collapse navbar-collapse'>
          <ul className='navbar-nav'>
            {navbarData.map((item, ind) => {
              return (
                <li key={ind}
                  className="nav-item">
                  {item}
                </li>
              )
            })}
          </ul>
        </div>

      </nav>
    </header>
  )
}

export default Header
