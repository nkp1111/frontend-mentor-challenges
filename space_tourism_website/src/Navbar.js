import React from 'react'
import { Link } from 'react-router-dom'
import { navData } from './nav-data'

function Navbar() {
  return (
    <nav>
      <ul>
        {navData.map(item => {
          return (
            <li key={item.id}>
              <Link className='nav-link'>
                <span>{item.id}</span> {item.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
