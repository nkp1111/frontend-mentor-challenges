import React from 'react'

function FooterIcons({ footerIcons }) {
  return (
    <div className='footer-icons'>
      {footerIcons.map(item => {
        return (
          <a key={item.id}
            href={item.link}
            className="nav-link">
            <img src={item.icon} alt={item.title}></img>
          </a>
        )
      })}
    </div>
  )
}

export default FooterIcons
