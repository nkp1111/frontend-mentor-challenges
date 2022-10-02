import React from 'react'
import { Link } from 'react-router-dom'
import { navData } from './nav-data'
import useGlobalContext from '../context'

function Navbar() {

  const { currentPage, handleCurrentPage } = useGlobalContext()
  return (
    <nav>
      <ul>
        {navData.map(item => {
          return (
            <li key={item.id}
              onClick={() => handleCurrentPage(item.name)}
              className={currentPage === item.name ? 'active' : ''}>
              <Link className='nav-link' to={`/${item.name}`}>
                <span>{item.id}</span> {item.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
