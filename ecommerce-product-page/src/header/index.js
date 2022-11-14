import React from 'react'
import logo from '../assets/images/logo.svg'
import cart from '../assets/images/icon-cart.svg'
import avatar from '../assets/images/image-avatar.png'
import Navbar from './navbar'
import useGlobalContext from '../context'
import CartItems from './CartItems'
import MenuIcon from '../assets/images/icon-menu.svg'
import Sidebar from './sidebar'

function Header() {

  const { showCart, setShowCart, itemAdded, media, showSidebar, setShowSidebar } = useGlobalContext()

  return (
    <header className='d-flex mb-5'>
      {media &&
        <img src={MenuIcon} alt="menu bar" id="menu-btn"
          onClick={() => {
            setShowSidebar(true)
          }} />}
      <div id='logo'>
        <img src={logo} alt="logo" />
      </div>
      {!media && <Navbar />}
      <div id="info" className='d-flex align-items-center'>
        <img src={cart} alt="cart" className={media ? 'mx-4' : 'mx-3'}
          onClick={() => {
            showCart
              ? setShowCart(false)
              : setShowCart(true)
          }} />
        {itemAdded > 0 && <p id="item-tooltip">{itemAdded}</p>}
        <img src={avatar} alt="avatar" className={media ? 'mx-0' : 'mx-3'} id="avatar" />

      </div>
      {showCart && <CartItems />}
      {showSidebar && <Sidebar />}
    </header>
  )
}

export default Header
