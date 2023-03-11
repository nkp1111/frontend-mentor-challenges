import React from 'react'
import { logo, footerIcons, footerLinks } from '../assets/data'
import SVG from './SVG'
import NavLinks from './NavLinks'
import "./footer.css"

function index() {
  return (
    <footer className='container-fluid'>
      <div className="row">
        <div className="col-md-2">
          <img src={logo} alt="logo" />
        </div>
        <div className="col-md-6">
          <NavLinks footerLinks={footerLinks} />
        </div>
        <div className="col-md-4">
          <SVG footerIcons={footerIcons}></SVG>
        </div>
      </div>
    </footer>
  )
}

export default index
