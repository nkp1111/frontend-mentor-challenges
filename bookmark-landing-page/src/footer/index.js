import React from 'react'
import { logoBookmark, navData, iconFacebook, iconTwitter } from '../assets/data'

function index() {
  return (
    <footer className='footer bg-danger'>
      <div className='container-fluid'>
        <nav className='footer-navbar'>
          <div>
            <img src={logoBookmark} alt="logo bookmark" className='navbar-brand' />
          </div>

          <ul className='navbar-nav'>
            {navData.map(item => {
              return (
                <li key={item} className='nav-items'>{item}</li>
              )
            })}
          </ul>

          <div className='icon-holder'>
            <div className='icon-cover'>
              <img src={iconFacebook} alt="facebook icon" />
            </div>
            <div className='icon-cover'>
              <img src={iconTwitter} alt="twitter icon" />
            </div>
          </div>

        </nav>
      </div>
    </footer>
  )
}

export default index
