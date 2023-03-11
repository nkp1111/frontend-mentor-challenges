import React from 'react'

function NavLinks({ footerLinks }) {
  return (
    <div className='footer-link d-flex justify-content-center my-4'>
      {footerLinks.map(item => {
        return (
          <a href={item.link}
            key={item.id}
            className="footer-nav-link">{item.title}</a>
        )
      })}
    </div>
  )
}

export default NavLinks
