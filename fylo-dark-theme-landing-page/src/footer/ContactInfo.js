import React from 'react'
import { footerContacts } from '../assets/data'

function ContactInfo() {
  return (
    <div className='footer-contacts'>

      <div className="row">
        <div className="contact-item col-md-6 d-flex"
          title={footerContacts[0].type} key={footerContacts[0].id}>
          <div>
            <img src={footerContacts[0].icon} alt={footerContacts[0].type} className="contact-icon" />
          </div>
          <p>{footerContacts[0].info}</p>
        </div>

        <div className="col-md-6">
          {footerContacts.slice(1,).map(item => {
            return (
              <div className="contact-item d-flex"
                title={item.type} key={item.id}>
                <div>
                  <img src={item.icon} alt={item.type} className="contact-icon" />
                </div>
                <p>{item.info}</p>
              </div>
            )
          })}
        </div>

      </div>
    </div>

  )
}

export default ContactInfo
