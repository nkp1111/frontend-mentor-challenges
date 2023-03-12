import React from 'react'
import Logo from '../component/logo'
import ContactInfo from './ContactInfo'
import FooterNavLinks from './FooterNavLinks'
import SocialLinks from './SocialLinks'

function index() {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* contact icons  */}
          <div className="col-md-5 contacts">
            <Logo color="white" />
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

        <p className='text-md-end text-center'>&copy; Copyright 2018 Huddle. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default index
