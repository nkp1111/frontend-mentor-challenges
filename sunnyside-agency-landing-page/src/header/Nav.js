import React from 'react'
import { NavData } from '../assets/data/navData'
import logo from '../assets/images/logo.svg'
import hamburger from '../assets/images/icon-hamburger.svg'

function Nav() {
  return (
    <nav className='navbar navbar-expand-md'>
      <img className='navbar-brand' src={logo} alt="logo" />
      <button className='navbar-toggler py-2' databstarget="#headerNavbar" databstoggle="collapse">
        <img src={hamburger} alt="hamburger menu icon" />
      </button>
      <div className='collapse navbar-collapse' id="headerNavbar">
        <ul className='navbar-nav ms-auto'>
          {NavData.map(item => {
            return (
              <li className='nav-item' key={item}>
                <a className='nav-link'>{item}</a>
              </li>
            )
          })}
          <button className='nav-contact-btn'>Contact</button>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
