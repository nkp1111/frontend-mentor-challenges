import React from 'react'
import { logo, navData, hamburgerLogo, closeIcon } from '../assets/data'

function index() {
  return (
    <header className='header'>
      <nav className='navbar navbar-expand-md'>
        <img src={logo} alt="logo" className='navbar-brand' />

        <div className='navbar-toggler' role="button" data-bs-target="#headerNav" data-bs-toggle="collapse">
          <img src={hamburgerLogo} alt="hamburger menu" />
        </div>

        <div className='collapse navbar-collapse' id="headerNav">
          <ul className='navbar-nav'>
            {navData.map(item => {
              return (
                <li key={item}
                  className="nav-item">
                  {item}
                  <span className='bottom-line'></span>
                </li>
              )
            })}
          </ul>

          <button className='btn invite-btn'>
            Request Invite
          </button>
        </div>
      </nav>
    </header>
  )
}

export default index
