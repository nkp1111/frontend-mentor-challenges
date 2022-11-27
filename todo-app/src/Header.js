import React from 'react'
import { FiCheck } from 'react-icons/fi'
import { FaMoon } from 'react-icons/fa'
import { RiSunFill } from 'react-icons/ri'




function Header() {
  return (
    <header>
      <h1>Todo</h1>
      <RiSunFill className="mode-change" />
      {/* <FaMoon /> */}
    </header>
  )
}

export default Header
