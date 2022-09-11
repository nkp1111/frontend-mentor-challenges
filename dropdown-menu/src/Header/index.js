import React from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'

function Header() {
  const MediumGray = 'hsl(0, 0%, 41%)'
  const AlmostBlack = 'hsl(0, 0%, 8%)'
  const color = MediumGray
  return (
    <header className="App-header
    d-flex
    justify-content-start
    align-items-center
    "
      style={{ color: color }}>
      <div >
        <img src='https://raw.githubusercontent.com/nkp1111/frontend-mentor-challenges/b4dcf216922bb6f28428d89fd83e06d19a16bc04/dropdown-menu/public/images/logo.svg' className="App-logo" alt="logo" />
      </div>
      <nav>
        <ul
          className='d-flex
        justify-space-between
        align-items-center
        mt-2
        '>
          <li>Features&nbsp;<BsChevronDown /> </li>
          <li>Company&nbsp;<BsChevronUp /></li>
          <li>Careers</li>
          <li>About</li>
        </ul>
      </nav>
      <div
        className='d-flex
      justify-content-end
      align-items-center
      '>
        <p
          className='my-auto'>
          Login</p>
        <button
        >Register</button>
      </div>
    </header>
  )
}

export default Header
