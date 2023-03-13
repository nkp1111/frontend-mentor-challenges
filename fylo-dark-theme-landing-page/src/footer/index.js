import React from 'react'
import Logo from '../component/logo'
import ContactInfo from './ContactInfo'
import FooterNavLinks from './FooterNavLinks'
import SocialLinks from './SocialLinks'
import "./footer.css"

function index() {
  return (
    <footer>
      <div className="container-fluid">
        <Logo />
        <div className="row align-items-start">
          {/* contact icons  */}
          <div className="col-md-6 contacts">
            <ContactInfo />
          </div>
          {/* nav links  */}
          <div className="col-md-4 nav-links">
            <div className="container">
              <FooterNavLinks />
            </div>
          </div>
          {/* social links  */}
          <div className="col-md-2 social-links">
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default index
