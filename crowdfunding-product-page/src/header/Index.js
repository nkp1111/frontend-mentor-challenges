import React from 'react'
import "./header.css"
import { logoMain, iconHamburgerMenu, navItems } from '../assets/data'

function Index() {
  return (
    <header className='header bg-dark'>
      <div className='container-fluid'>
        <nav className='navbar navbar-expand-md'>
          {/* navbar logo  */}
          <div>
            <img src={logoMain} alt="crowdfund logo" className='navbar-brand' />
          </div>

          {/* navbar toggler btn  */}
          <div className='navbar-toggler' data-bs-target="#headerNav" data-bs-toggle="collapse" role="button">
            <img src={iconHamburgerMenu} alt=""></img>
          </div>

          {/* navbar items  */}
          <div className='collapse navbar-collapse' id="headerNav">
            <ul className='navbar-nav'>
              {navItems.map(item => {
                return (
                  <li className='nav-item' key={item}>{item}</li>
                )
              })}
            </ul>

          </div>

        </nav>
      </div>
    </header>
  )
}

export default Index
