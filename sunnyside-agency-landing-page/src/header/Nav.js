import React from 'react'
import { NavData } from '../assets/data/navData'
import logo from '../assets/images/logo.svg'

function Nav() {
  return (
    <nav className='navbar navbar-expand-sm'>
      <img className='navbar-brand' src={logo} alt="logo" />
      <ul className='navbar-nav ms-auto'>
        {NavData.map(item => {
          return (
            <li className='nav-item'>
              <a className='nav-link'>{item}</a>
            </li>
          )
        })}
        <button className='nav-contact-btn'>Contact</button>
      </ul>
    </nav>
  )
}

export default Nav
