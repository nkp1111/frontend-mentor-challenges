import React from 'react'
import { logoMain } from '../assets/data'

function Index() {
  return (
    <header className='header bg-dark'>
      <div className='container-fluid'>
        <nav className='navbar'>
          <div>
            <img src={logoMain} alt=" " />
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Index
