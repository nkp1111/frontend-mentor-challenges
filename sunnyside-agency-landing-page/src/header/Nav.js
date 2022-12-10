import React from 'react'
import { NavData } from '../assets/data/navData'

function Nav() {
  return (
    <nav>
      <a>
        sunnyside
      </a>
      <ul>
        {NavData.map(item => {
          return (
            <li>
              <a>{item}</a>
            </li>
          )
        })}
        <button>Contact</button>
      </ul>
    </nav>
  )
}

export default Nav
