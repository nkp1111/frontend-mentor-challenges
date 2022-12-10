import React from 'react'
import facebook from '../assets/images/icon-facebook.svg'
import instagram from '../assets/images/icon-instagram.svg'
import twitter from '../assets/images/icon-twitter.svg'
import pinterest from '../assets/images/icon-pinterest.svg'

function Footer() {
  return (
    <footer
      className='d-flex 
    flex-column 
    align-items-center'>
      <p className='footer-title'>sunnyside</p>
      <ul className='footer-links'>
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
      </ul>
      <ul className='footer-icons'>
        <li>
          <img src={facebook} alt='facebook logo' />
        </li>
        <li>
          <img src={instagram} alt='instagram logo' />
        </li>
        <li>
          <img src={twitter} alt='twitter logo' />
        </li>
        <li>
          <img src={pinterest} alt='pinterest logo' />
        </li>
      </ul>
    </footer>
  )
}

export default Footer
