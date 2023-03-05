import React, { useState, useEffect } from 'react'

function NavbarTogglerBtn({ iconClose, iconHamburger }) {
  const [currentToggleImage, setCurrentToggleImage] = useState(iconHamburger)

  useEffect(() => {
    // change icons on click btw hamburger and close icon
    if (iconClose && iconHamburger) {
      const toggler = document.querySelector(".navbar-toggler")
      toggler.addEventListener("click", () => {
        if (toggler.classList.contains("collapsed")) {
          setCurrentToggleImage(iconHamburger)
        } else {
          setCurrentToggleImage(iconClose)
        }
      })
    }
  })

  return (
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
      {iconClose && iconHamburger
        ? <img src={currentToggleImage} alt="hamburger-icon" className='nav-hamburger-icon' />
        : <span className="navbar-toggler-icon nav-hamburger-icon"></span>}
    </button>
  )
}

export default NavbarTogglerBtn
