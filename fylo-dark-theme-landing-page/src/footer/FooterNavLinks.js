import React from 'react'
import { footerLinks } from '../assets/data'

function FooterNavLinks() {
  return (
    <div className='row'>
      {footerLinks.map(item => {
        return (
          <a href={item.link} className="col-md-6 nav-link"
            key={item.id}>{item.title}</a>
        )
      })}
    </div>
  )
}

export default FooterNavLinks
