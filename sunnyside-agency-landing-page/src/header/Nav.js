import React from 'react'
import logo from '../assets/images/logo.svg'
import hamburger from '../assets/images/icon-hamburger.svg'
import NavItems from './NavItems'
import Sidebar from './Sidebar'
import useGlobalContext from '../context'

function Nav() {

  const { showNav, setShowNav } = useGlobalContext()
  return (
    <nav className='navbar navbar-expand-md'>
      <img className='navbar-brand' src={logo} alt="logo" />
      <button className='navbar-toggler py-2'
        onClick={() => {
          if (showNav) {
            setShowNav(false)
          } else {
            setShowNav(true)
          }
        }}>
        <img src={hamburger} alt="hamburger menu icon" />
      </button>
      <div className='collapse navbar-collapse' id="headerNavbar">
        <NavItems />
      </div>
      {showNav && <Sidebar />}
    </nav>
  )
}

export default Nav
