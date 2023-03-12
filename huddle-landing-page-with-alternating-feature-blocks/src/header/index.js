import React from 'react'
import { logo } from '../assets/data'

function index() {
  return (
    <header>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-sm">
          <div className="nav-logo">
            <img src={logo} alt="logo" className='navbar-brand' />
          </div>
          <div className="btn-holder ms-auto">
            <button className="btn">Try It Free</button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default index
