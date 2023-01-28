import React from 'react'

function FooterItems({ navItems }) {
  return (
    <div className='footer-link-items'>
      <ul className='navbar-nav'>
        {navItems.map(item => {
          return (
            <li key={item.id} className="nav-item">
              <a href={item.link} className="nav-link">{item.title}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default FooterItems
