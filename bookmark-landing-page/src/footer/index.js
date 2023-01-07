import React from 'react'
import { logoBookmarkWhite, navData, iconFacebook, iconTwitter } from '../assets/data'

function index() {
  return (
    <footer className='footer'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-3'>
            <img src={logoBookmarkWhite} alt="logo bookmark" className='navbar-brand' />
          </div>

          <ul className='link-holder col-md-7 row'>
            {navData.map(item => {
              return (
                <li key={item} className='link-item col-md-2'>{item}</li>
              )
            })}
          </ul>

          <div className='icon-holder col-3 row'>
            <div className='icon-cover col-6'>
              <img src={iconFacebook} alt="facebook icon" />
            </div>
            <div className='icon-cover col-6'>
              <img src={iconTwitter} alt="twitter icon" />
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default index
