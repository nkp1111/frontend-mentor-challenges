import React from 'react'

function Header() {
  return (
    <header className="App-header
    d-flex">
      <div>
        <img src='https://raw.githubusercontent.com/nkp1111/frontend-mentor-challenges/b4dcf216922bb6f28428d89fd83e06d19a16bc04/dropdown-menu/public/images/logo.svg' className="App-logo" alt="logo" />
      </div>

      <div>
        <nav>
          <ul>
            <li>Features BsChevronDown BsChevronUp</li>
            <li>Company</li>
            <li>Careers</li>
            <li>About</li>
          </ul>
        </nav>
      </div>

      <div>
        <p>Login</p>
        <button>Register</button>
      </div>
    </header>
  )
}

export default Header
