import React from 'react'
import Logo from '../component/logo'
import ContactInfo from './ContactInfo'
import FooterNavLinks from './FooterNavLinks'

function index() {
  return (
    <footer className='bg-dark'>
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
        </div>

      </div>
    </footer>
  )
}

export default index
