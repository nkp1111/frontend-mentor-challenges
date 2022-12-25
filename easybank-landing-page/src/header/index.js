import React from 'react'
import { logo, navData } from '../assets/data'

function index() {
  return (
    <header className='header'>
      <nav className='navbar navbar-expand-md'>
        <img src={logo} alt="logo" className='navbar-brand' />

        <div className='navbar navbar-collapse' id="headerNav">
          <ul className='navbar-nav'>
            {navData.map(item => {
              return (
                <li key={item}
                  className="nav-item">
                  {item}
                </li>
              )
            })}
          </ul>

          <button className='btn'>
            Request Invite
          </button>
        </div>
      </nav>
    </header>
  )
}

export default index
