import React from 'react'
import "./header.css"
import { logo, navData } from '../assets/data'

function index() {
  return (
    <header className='header'>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-md">
          <div className="container-fluid">
            {/* header logo  */}
            <a className="navbar-brand" href="#">
              <img src={logo} alt="logo" />
            </a>

            {/* toggle button */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

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
              <div className="btn-holder ">
                <button className="btn">View plans</button>
              </div>
            </div>
          </div>
        </nav>
      </div>

    </header>
  )
}

export default index
