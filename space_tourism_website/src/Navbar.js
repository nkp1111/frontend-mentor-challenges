import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link>
            <span>00</span> Home
          </Link>
        </li>
        <li>
          <Link>
            <span>01</span> Destination
          </Link>
        </li>
        <li>
          <Link>
            <span>02</span> Crew
          </Link>
        </li>
        <li>
          <Link>
            <span>03</span> Technology
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
