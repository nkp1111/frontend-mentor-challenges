import React from 'react'
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'

function SocialLinks() {
  return (
    <div className='d-flex'>
      <FaFacebook className='social-icon-img' />
      <FaTwitter className='social-icon-img' />
      <FaInstagram className='social-icon-img' />
    </div>
  )
}

export default SocialLinks
