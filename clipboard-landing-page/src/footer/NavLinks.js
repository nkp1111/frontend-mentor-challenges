import React from 'react'

function NavLinks({ footerLinks }) {
  return (
    <div className='footer-link d-flex'>
      {footerLinks.map(item => {
        return (
          <a href={item.link}
            key={item.id}
            className="footer-link">{item.title}</a>
        )
      })}
    </div>
  )
}

export default NavLinks
