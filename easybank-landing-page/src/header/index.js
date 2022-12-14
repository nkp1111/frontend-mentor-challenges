import React from 'react'
import { logo, navData, hamburgerLogo, closeIcon } from '../assets/data'

function index() {
  return (
    <header className='header'>
      <div className='container-fluid'>
        <nav className='navbar navbar-expand-md'>
          <img src={logo} alt="logo" className='navbar-brand' />

          <div className='navbar-toggler' role="button" data-bs-target="#headerNav" data-bs-toggle="collapse"
            onClick={(e) => {
              const el = e.currentTarget.firstElementChild
              if (el.alt === "close menu") {
                el.src = hamburgerLogo
                el.alt = "hamburger menu"
              } else {
                el.src = closeIcon
                el.alt = "close menu"
              }
            }}>
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
      </div>
    </header>
  )
}

export default index
