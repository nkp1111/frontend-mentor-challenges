import React from 'react'
import Logo from '../component/logo'

function index() {
  return (
    <header>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-sm">
          <div className="nav-logo">
            <Logo />
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
