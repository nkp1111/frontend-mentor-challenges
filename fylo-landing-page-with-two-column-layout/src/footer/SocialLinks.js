import React from 'react'
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa'

function SocialLinks() {
  return (
    <div className='d-flex'>
      <a href="#">
        <FaFacebookF className='social-icon-img' />
      </a>
      <a href="#">
        <FaTwitter className='social-icon-img' />
      </a>
      <a href="#">
        <FaInstagram className='social-icon-img' />
      </a>
    </div>
  )
}

export default SocialLinks
