import React from 'react'

function FooterBody({ footerNavLink }) {
  return (
    <div className="footer-body row">
      {footerNavLink.map(item => {
        return (
          <div className="col-md-3" key={item.id}>
            <p className='footer-nav-title'>{item.title}</p>
            <ul className='navbar-nav'>
              {item.sublink.map(subitem => {
                return (
                  <li key={subitem.id} className="nav-item">
                    <a href={subitem.link} className="nav-link">{subitem.title}</a>
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default FooterBody
