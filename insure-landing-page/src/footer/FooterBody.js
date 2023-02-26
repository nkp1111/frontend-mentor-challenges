import React from 'react'

function FooterBody({ footerNavLink }) {
  return (
    <div className="footer-body row">
      {footerNavLink.map(item => {
        return (
          <div className="col-md-3" key={item.id}>
            <p className='footer-nav-title'>{item.title}</p>
            {item.sublink.map(subitem => {
              return (
                <li key={subitem.id}>
                  <a href={subitem.link}>{subitem.title}</a>
                </li>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default FooterBody
