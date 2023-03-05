import React from 'react'

function NavbarCollapsableItems({ navData }) {
  return (
    <div className="collapse navbar-collapse" id="navbar">
      <div className="navbar-nav ms-auto">
        {navData.map(item => {
          return (
            <a key={item.id} className="nav-link" href={item.link}>{item.title}</a>
          )
        })}
      </div>

      <div className="btn-holder">
        <a href="##"
          className="btn login-btn">Login</a>
      </div>
    </div>
  )
}

export default NavbarCollapsableItems
