import React from 'react'
import useGlobalContext from '../context'
import { Link } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'

function NavItem({ navData }) {

  const { handleCurrentPage, currentPage, sidebar, handleSidebar } = useGlobalContext()
  return (
    <>
      {sidebar && <div onClick={() => handleSidebar(sidebar)}><AiOutlineClose className='close-btn' /></div>}
      {navData.map(item => {
        return (
          <li key={item.id}
            onClick={() => {
              handleCurrentPage(item.name)
              if (sidebar) {
                handleSidebar(sidebar)
              }
            }}
            className={currentPage === item.name ? 'active' : ''}>
            <Link className='nav-link' to={`/${item.name}`}>
              <span>{item.id}</span>&nbsp;{item.name}
            </Link>
          </li>
        )
      })}
    </>
  )
}

export default NavItem
