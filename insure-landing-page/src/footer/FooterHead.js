import React from 'react'

function FooterHead({ logo, footerContactIcons }) {
  return (
    <div className="footer-head d-flex justify-content-between align-items-center">
      <div className="footer-img-holder d-flex align-items-center">
        <img src={logo} alt="logo" />
      </div>
      <ul className='navbar-nav d-flex flex-row'>
        {footerContactIcons.map(item => {
          return (
            <li key={item.id} className="nav-item">
              <a href={item.link} className="nav-link">
                <img src={item.icon} alt={item.title} />
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default FooterHead
