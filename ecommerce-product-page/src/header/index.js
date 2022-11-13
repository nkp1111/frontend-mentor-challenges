import React from 'react'
import logo from '../assets/images/logo.svg'
import cart from '../assets/images/icon-cart.svg'
import avatar from '../assets/images/image-avatar.png'
import Navbar from './navbar'

function Header() {
  return (
    <header className='d-flex mb-5'>
      <div id='logo'>
        <img src={logo} alt="logo" />
      </div>
      <Navbar />
      <div id="info" className='d-flex align-items-center'>
        <img src={cart} alt="cart" className='mx-3' />
        <img src={avatar} alt="avatar" className='mx-3' id="avatar" />
      </div>
    </header>
  )
}

export default Header
