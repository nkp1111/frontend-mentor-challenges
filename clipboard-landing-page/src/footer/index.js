import React from 'react'
import { logo, footerIcons, footerLinks } from '../assets/data'
import SVG from './SVG'
import NavLinks from './NavLinks'
import "./footer.css"

function index() {
  return (
    <footer className='d-flex align-items-center'>
      <div>
        <img src={logo} alt="logo" className='footer-logo' />
      </div>
      <div>
        <NavLinks footerLinks={footerLinks} />
      </div>
      <div className='ms-auto'>
        <SVG footerIcons={footerIcons}></SVG>
      </div>
    </footer>
  )
}

export default index
