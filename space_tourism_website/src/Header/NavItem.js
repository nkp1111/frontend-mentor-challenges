import React from 'react'
import useGlobalContext from '../context'
import { Link } from 'react-router-dom'

function NavItem({ navData }) {

  const { handleCurrentPage, currentPage } = useGlobalContext()
  return (
    <>
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
    </>
  )
}

export default NavItem
