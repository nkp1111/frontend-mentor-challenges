import React from 'react'
import { logo, navData } from '../assets/data'

function index() {
  return (
    <header className='header'>
      <nav className="navbar navbar-expand-sm">
        <div className="container-fluid">
          {/* navbar logo  */}
          <a className="navbar-brand" href="##">
            <img src={logo} alt="logo" />
          </a>

          {/* navbar toggler  */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* navbar items  */}
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
        </div>
      </nav>
    </header>
  )
}

export default index
