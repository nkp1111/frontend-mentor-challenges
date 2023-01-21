import React from 'react'
import { logo, iconClose, iconHamburger, navItem } from '../assets/data'

function index() {
  return (
    <header className='header'>
      <div className='container-fluid'>
        {/* navbar  */}
        <nav className='navbar navbar-expand-md'>
          {/* logo  */}
          <div className='nav-logo'>
            <img src={logo} alt="logo" className='navbar-brand'></img>
          </div>

          {/* navbar hamburger button */}
          <div className='navbar-toggler' data-bs-target="#headerNavbar" data-bs-toggle="collapse">
            <img src={iconHamburger} alt="hamburger icon"></img>
          </div>

          {/* collapsable navbar items  */}
          <div id="headerNavbar" className='collapse navbar-collapse'>
            <ul className='navbar-nav'>
              {navItem.map(item => {
                return (
                  <li key={item.id} className="nav-item">
                    <a className='nav-link' href={item.link}>{item.item}</a>
                  </li>
                )
              })}
            </ul>

            <button className='btn btn-orange'>Get Started</button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default index
