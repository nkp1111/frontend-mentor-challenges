import React from 'react'

function NavbarTogglerBtn({ iconClose, iconHamburger }) {
  return (
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
      {iconClose && iconHamburger
        ? <img src={iconHamburger} alt="hamburger-icon" className='nav-hamburger-icon' />
        : <span className="navbar-toggler-icon nav-hamburger-icon"></span>}
    </button>
  )
}

export default NavbarTogglerBtn
