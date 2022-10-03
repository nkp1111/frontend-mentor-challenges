import React from 'react'
import { Link } from 'react-router-dom'
import { navData } from './nav-data'
import useGlobalContext from '../context'
import { FaBars } from 'react-icons/fa'

function Navbar() {

  const { currentPage, handleCurrentPage, navbar, sidebar, handleSidebar } = useGlobalContext()

  return (
    <nav className={navbar ? "" : "menu"}>
      <ul>
        {navbar ?
          navData.map(item => {
            return (
              <li key={item.id}
                onClick={() => handleCurrentPage(item.name)}
                className={currentPage === item.name ? 'active' : ''}>
                <Link className='nav-link' to={`/${item.name}`}>
                  <span>{item.id}</span> {item.name}
                </Link>
              </li>
            )
          })
          : <li onClick={() => handleSidebar(sidebar)}><FaBars /></li>}
      </ul>
    </nav>
  )
}

export default Navbar
