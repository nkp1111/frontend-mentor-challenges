import React from 'react'
import { logoWhite, footerItems, footerLogos } from '../assets/data'

function index() {
  return (
    <footer className=''>
      <div className='row'>
        <div className='col-md-3'>
          <img src={logoWhite} alt="logo" />
          <ul>
            {footerLogos.map((item, ind) => {
              return (
                <li key={ind}>
                  <img src={item} alt="logo"></img>
                </li>
              )
            })}
          </ul>
        </div>

        <div className='col-md-4 row'>
          {footerItems.map(item => {
            return (
              <li className='col-md-6'>{item}</li>
            )
          })}
        </div>


        <div className='col-md-5'>
          <button className='btn invite-btn'>Request Invite</button>
          <p>© Easybank. All Rights Reserved</p>
        </div>

      </div>
    </footer>
  )
}

export default index
