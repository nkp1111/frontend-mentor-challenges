import React from 'react'
import { navData } from './nav-data'
import useGlobalContext from '../context'
import { FaBars } from 'react-icons/fa'
import NavItem from './NavItem'

function Navbar() {

  const { navbar, sidebar, handleSidebar } = useGlobalContext()
  console.log(sidebar);
  return (
    <nav className={navbar ? '' : 'menu'}>
      <ul className={sidebar ? 'sidebar' : ''}>
        {navbar
          ? <NavItem navData={navData} />
          : sidebar
            ? <NavItem navData={navData} />
            : <li onClick={() => handleSidebar(sidebar)}><FaBars /></li>
        }
      </ul>
    </nav>
  )
}

export default Navbar
