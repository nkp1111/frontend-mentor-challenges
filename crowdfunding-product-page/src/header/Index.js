import React, { useEffect, useRef } from 'react'
import "./header.css"
import { logoMain, iconHamburgerMenu, navItems, iconCloseMenu } from '../assets/data'

function Index() {
  const imgRef = useRef()


  useEffect(() => {
    let img = imgRef.current
    img.addEventListener("click", (e) => {
      if (img.alt === "hamburger-menu") {
        img.alt = "close-menu"
        img.src = iconCloseMenu
      } else {
        img.alt = "hamburger-menu"
        img.src = iconHamburgerMenu
      }
    })
  })

  return (
    <header className='header'>
      <div className='container-fluid'>
        <nav className='navbar navbar-expand-md'>
          {/* navbar logo  */}
          <div>
            <img src={logoMain} alt="crowdfund logo" className='navbar-brand' />
          </div>

          {/* navbar toggler btn  */}
          <div className='navbar-toggler' data-bs-target="#headerNav" data-bs-toggle="collapse"
            role="button">
            <img src={iconHamburgerMenu} alt="hamburger-menu"
              ref={imgRef}></img>
          </div>

          {/* navbar items  */}
          <div className='collapse navbar-collapse' id="headerNav">
            <ul className='navbar-nav'>
              {navItems.map(item => {
                return (
                  <li className='nav-item' key={item}>{item}</li>
                )
              })}
            </ul>
          </div>

        </nav>
      </div>
    </header>
  )
}

export default Index
