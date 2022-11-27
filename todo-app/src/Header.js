import React from 'react'
import { FiCheck } from 'react-icons/fi'
import { FaMoon } from 'react-icons/fa'
import { RiSunFill } from 'react-icons/ri'
import useGlobalContext from './context'

function Header() {

  const { state, changeMode } = useGlobalContext()

  return (
    <header>
      <h1>Todo</h1>
      <span onClick={changeMode}>
        {
          state.mode === "dark"
            ? <RiSunFill className="mode-change" />
            : <FaMoon className="mode-change" />
        }
      </span>


    </header>
  )
}

export default Header
