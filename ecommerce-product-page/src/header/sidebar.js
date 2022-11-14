import React from 'react'
import Navbar from './navbar'
import CloseIcon from '../assets/images/icon-close.svg'
import useGlobalContext from '../context'


function Sidebar() {

  const { setShowSidebar } = useGlobalContext()
  return (
    <div id="sidebar">
      <img src={CloseIcon} alt="close button"
        onClick={() => {
          setShowSidebar(false)
        }} />
      <Navbar />
    </div>
  )
}

export default Sidebar
