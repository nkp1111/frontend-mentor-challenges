import React from 'react'
import { footerIcons, footerItems, logoFooter } from '../assets/data'
import "./footer.css"

function index() {
  return (
    <footer className='footer container-fluid'>
      <div className='row'>

        {/* footer logo  */}
        <div className='footer-logo col-md-4'>
          <img src={logoFooter} alt="manage logo"></img>
        </div>

        {/* footer navigation  */}
        <div className='footer-nav col-md-4'>
          <ul className='row navbar-nav'>
            {footerItems.map(item => {
              return (
                <li key={item.id} className="nav-item col-5">
                  <a href={item.link} className="nav-link">{item.item}</a>
                </li>
              )
            })}
          </ul>
        </div>

        {/* footer form  */}
        <div className='footer-form col-md-4'>
          <input type="email" placeholder="Updates in your inbox..." required />
          <button className='btn btn-orange'>GO</button>
        </div>


        {/* footer icons  */}
        <div className='footer-icons col-md-4'>
          {footerIcons.map((item, ind) => {
            return (
              <img src={item} alt="" key={ind}></img>
            )
          })}
        </div>

        {/* footer copyright info  */}
        <div className='footer-copyright col-md-4'>
          <p>
            Copyright {new Date().getFullYear()}.All Rights Reserved
          </p>
        </div>
      </div>

    </footer>
  )
}

export default index
