import React, { useEffect, useRef } from 'react'
import { logoBookmark, iconHamburger, iconClose, navData } from '../assets/data'

function Index() {

  return (
    <header className='header d-flex align-items-center'>
      <nav className='navbar navbar-expand-md'>
        <div className='main-logo-holder'>
          <img src={logoBookmark} alt="logo bookmark" className='navbar-brand' />
        </div>

        <div
          className='navbar-toggler'
          data-bs-target="#headerNav"
          data-bs-toggle="collapse">
          <img src={iconHamburger} alt="hamburger-icon" ></img>
        </div>

        <div className='collapse navbar-collapse' id="headerNav">
          <ul className='navbar-nav'>
            {navData.map(item => {
              return (
                <li key={item} className='nav-items'>{item}</li>
              )
            })}
          </ul>

          <button className='btn login-btn btn-outline'>
            Login
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Index
