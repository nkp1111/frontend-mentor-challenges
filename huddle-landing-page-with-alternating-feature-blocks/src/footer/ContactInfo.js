import React from 'react'
import { footerContacts } from '../assets/data'

function ContactInfo() {
  return (
    <div className='footer-contacts'>
      {footerContacts.map(item => {
        return (
          <div className="contact-item d-flex justify-content-between"
            title={item.type} key={item.id}>
            <div>
              <img src={item.icon} alt={item.type} className="contact-icon" />
            </div>
            <p>{item.info}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ContactInfo
