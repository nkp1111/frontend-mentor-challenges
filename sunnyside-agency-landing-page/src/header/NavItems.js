import React from 'react'
import { NavData } from '../assets/data/navData'

function NavItems() {
  return (
    <ul className='navbar-nav ms-auto'>
      {NavData.map(item => {
        return (
          <li className='nav-item' key={item}>
            <span className='nav-link'>{item}</span>
          </li>
        )
      })}
      <button className='nav-contact-btn'>Contact</button>
    </ul>
  )
}

export default NavItems
