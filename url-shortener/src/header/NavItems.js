import React from 'react'

function NavItems({ navbarData }) {
  return (
    <div id="headerNavbar" className='collapse navbar-collapse'>
      <ul className='navbar-nav'>
        {navbarData.map((item, ind) => {
          return (
            <li key={ind}
              className="nav-item">
              {item}
            </li>
          )
        })}
      </ul>

      {/* navbar buttons  */}
      <div className='btn-holder'>
        <button className='btn btn-dark'>Login</button>
        <button className='btn btn-dark'>Sign Up</button>
      </div>
    </div>
  )
}

export default NavItems
