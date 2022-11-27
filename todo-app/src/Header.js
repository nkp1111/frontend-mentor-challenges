import React from 'react'
import { FiCheck } from 'react-icons/fi'
import { FaMoon } from 'react-icons/fa'
import { GrClose } from 'react-icons/gr'
import { RiSunFill } from 'react-icons/ri'




function Header() {
  return (
    <header>
      <h1>Todo</h1>
      <RiSunFill class="mode-change" />
      {/* <FaMoon /> */}
    </header>
  )
}

export default Header
