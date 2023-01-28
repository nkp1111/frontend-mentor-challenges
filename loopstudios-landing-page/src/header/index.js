import React, { useState } from 'react'
import { logo, hamburgerIcon, closeIcon, navItems } from '../assets/data'
import "./header.css"

function Index() {

  return (
    <header className="header">
      <nav className='navbar navbar-expand-md'>
        {/* navbar logo  */}
        <div className='navbar-logo-holder'>
          <img src={logo} alt="loopstudios logo"
            className='navbar-brand'></img>
        </div>
        {/* navbar toggler button  */}
        <div className='navbar-toggler' data-bs-target="#headerNav" data-bs-toggle="collapse">
          <img src={hamburgerIcon} alt="hamburger icon"></img>
        </div>
        {/* navbar collapsable items  */}
        <div className='collapse navbar-collapse' id="headerNav">

          <ul className='navbar-nav'>
            {navItems.map(item => {
              return (<li className='nav-item' key={item.id}>
                <a href={item.link} className="nav-link">{item.title}</a>
              </li>)
            })}
          </ul>
        </div>

      </nav>
    </header>
  )
}

export default Index
