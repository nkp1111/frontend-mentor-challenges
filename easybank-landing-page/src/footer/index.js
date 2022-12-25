import React from 'react'
import { logoWhite, footerItems, footerLogos } from '../assets/data'

function index() {
  return (
    <footer className='footer'>
      <div className='row'>
        <div className='col-md-3'>
          <img src={logoWhite} alt="logo" className='logo' />
          <ul className='icon-holder'>
            {footerLogos.map((item, ind) => {
              return (
                <li key={ind} className="icons">
                  <img src={item} alt="logo"></img>
                </li>
              )
            })}
          </ul>
        </div>

        <ul className='col-md-4 row'>
          {footerItems.map(item => {
            return (
              <li key={item} className='col-md-6'>{item}</li>
            )
          })}
        </ul>

        <div className='col-md-5 d-flex copyright-div'>
          <button className='btn invite-btn'>Request Invite</button>
          <p>© Easybank. All Rights Reserved</p>
        </div>

      </div>
    </footer>
  )
}

export default index
