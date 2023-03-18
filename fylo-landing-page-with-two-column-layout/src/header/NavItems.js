import React from 'react'
import { navbarLinks } from '../assets/data'

function NavItems() {
  return (
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        {navbarLinks.map(item => {
          return (
            <li className="nav-item" key={item.id}>
              <a className="nav-link" href={item.link}>{item.title}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default NavItems
