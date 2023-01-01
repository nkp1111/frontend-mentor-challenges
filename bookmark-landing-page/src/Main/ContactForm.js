import React from 'react'
import { iconError } from '../assets/data'

function ContactForm() {
  return (
    <section className='contact-form'>

      <div className='container-fluid bg-dark'>
        <div className='row'>
          <h2 className='col-12'>Stay up-to-date with what we’re doing</h2>
          <p className='col-12'>35,000+ already joined</p>
          <form className='col-12'>
            <div className='row'>
              <div className='email-input-holder'>
                <input type="email"
                  name="email"
                  placeholder="Type your email here..."
                  className='col-7' />
                <span className='error-icon'>
                  <img src={iconError} alt="error icon"></img>
                </span>
              </div>
              <button className='btn contact-btn col-4'>Contact Us</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
