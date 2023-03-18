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
        <Logo color="white" />
        <div className="row align-items-start">
          {/* contact icons  */}
          <div className="col-md-5 contacts">
            <ContactInfo />
          </div>
          {/* nav links  */}
          <div className="col-md-4 nav-links">
            <FooterNavLinks />
          </div>
          {/* social links  */}
          <div className="col-md-3 social-links">
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default index
