import React from 'react'
import FyloLogo from '../component/logo'
import TogglerBtn from './TogglerBtn'
import NavItems from './NavItems'
import "./header.css"

function index() {
  return (
    <header>
      <nav className="navbar navbar-expand-sm">
        <div className="container-fluid">
          {/* navbar logo */}
          <FyloLogo />
          {/* navbar toggler button  */}
          <TogglerBtn />
          {/* navbar collapsable item */}
          <NavItems />
        </div>
      </nav>
    </header>
  )
}

export default index
