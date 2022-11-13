import React from 'react'
import logo from '../assets/images/logo.svg'
import cart from '../assets/images/icon-cart.svg'
import avatar from '../assets/images/image-avatar.png'
import { data } from '../assets/navData'

function Header() {
  return (
    <header className='d-flex justify-content-between'>
      <img src={logo} alt="logo" />
      <nav>
        <div>
          <ul>
            {data.map(d => {
              return (<li key={d}>{d}</li>)
            })}
          </ul>
        </div>
      </nav>
      <div id="info">
        <img src={cart} alt="cart" />
        <img src={avatar} alt="avatar" />
      </div>
    </header>
  )
}

export default Header
