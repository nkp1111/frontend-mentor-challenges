import React from 'react'
import { navItems, logo, footerIcons } from '../assets/data'
import FooterItems from './FooterItems'
import FooterIcons from './FooterIcons'
import "./footer.css"

function index() {
  return (
    <footer className='footer'>
      {/* footer logo  */}
      <div className='logo-holder'>
        <img src={logo} alt="loopstudios logo"></img>
      </div>
      {/* footer items  */}
      <FooterItems navItems={navItems} />
      {/* footer icons  */}
      <FooterIcons footerIcons={footerIcons} />
      {/* footer copyright  */}
      <div className='footer-copyright'>
        <p>© 2021 Loopstudios. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default index
