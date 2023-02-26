import React from 'react'
import { logo, footerContactIcons, footerNavLink } from '../assets/data'
import FooterBody from './FooterBody'
import FooterHead from './FooterHead'

function index() {
  return (
    <footer>
      <div className="container-fluid">
        {/* footer head  */}
        <FooterHead {...{ logo, footerContactIcons }} />
        {/* footer body  */}
        <FooterBody footerNavLink={footerNavLink} />
      </div>
    </footer>
  )
}

export default index
