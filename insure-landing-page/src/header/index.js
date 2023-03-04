import React, { useEffect, useState } from 'react'
import "./header.css"
import { logo, navData, iconClose, iconHamburger } from '../assets/data'

function Index() {

  const [currentToggleImage, setCurrentToggleImage] = useState(iconHamburger)

  useEffect(() => {
    const toggler = document.querySelector(".navbar-toggler")
    toggler.addEventListener("click", () => {
      if (toggler.classList.contains("collapsed")) {
        setCurrentToggleImage(iconHamburger)
      } else {
        setCurrentToggleImage(iconClose)
      }
    })
  })

  return (
    <header className='header'>
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid">
          <div className="pad-area d-flex align-items-center">
            {/* header logo  */}
            <a className="navbar-brand" href="#">
              <img src={logo} alt="logo" />
            </a>

            {/* toggle button */}
            <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <img src={currentToggleImage} alt="hamburger-icon" />
            </button>
          </div>

          {/* navbar items  */}
          <div className="collapse navbar-collapse ms-auto" id="navbarNav">
            <ul className="navbar-nav">
              {navData.map(item => {
                return (
                  <li key={item.id} className="nav-item">
                    <a href={item.link} className="nav-link">{item.title}</a>
                  </li>
                )
              })}
            </ul>

            {/* navbar button  */}
            <div className="btn-holder">
              <button className="btn">View plans</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Index
