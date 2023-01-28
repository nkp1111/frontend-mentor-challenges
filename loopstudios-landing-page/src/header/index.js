import React from 'react'
import { logo } from '../assets/data'

function index() {
  return (
    <header>
      <nav>
        <div>
          <img src={logo} alt="loopstudios logo"></img>
        </div>
      </nav>
    </header>
  )
}

export default index
