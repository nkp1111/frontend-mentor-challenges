import React from 'react'
import { headerData } from '../assets/data/headerData'

function Header() {
  return (
    <header>
      <nav>
        <a>
          sunnyside
        </a>
        <ul>
          {headerData.map(item => {
            return (
              <li>
                <a>{item}</a>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Header
