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
      <div className='btn-holder ms-auto'>
        <button className='login-btn btn'>Login</button>
        <button className='signup-btn btn'>Sign Up</button>
      </div>
    </div>
  )
}

export default NavItems
