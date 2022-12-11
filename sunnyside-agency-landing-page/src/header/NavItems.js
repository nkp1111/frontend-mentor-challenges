import React from 'react'
import { NavData } from '../assets/data/navData'

function NavItems() {
  return (
    <ul className='navbar-nav ms-auto'>
      {NavData.map(item => {
        return (
          <li className='nav-item' key={item}>
            <a className='nav-link'>{item}</a>
          </li>
        )
      })}
      <a className='nav-link nav-contact-btn' role="button">Contact</a>
    </ul>
  )
}

export default NavItems
