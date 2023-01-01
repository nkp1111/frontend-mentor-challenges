import React, { useRef } from 'react'
import { iconError } from '../assets/data'

function ContactForm() {

  let emailRef = useRef()

  const setErrorStyle = () => {
    // show error and remove after 2 second 
    document.querySelector(".error-icon").style.display = "block"
    emailRef.current.style.border = "2px solid var(--Soft-Red)"
    document.querySelector(".error-message").style.display = "block"

    setTimeout(function () {
      document.querySelector(".error-icon").style.display = "none"
      emailRef.current.style.border = "none"
      document.querySelector(".error-message").style.display = "none"
    }, 2000)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let inputValue = emailRef.current.value
    let atPos = inputValue.lastIndexOf("@")
    let dotPos = inputValue.lastIndexOf(".")
    if (atPos === -1 || dotPos === -1 || atPos > dotPos) {
      setErrorStyle()
    }
  }

  return (
    <section className='contact-form'>
      <div className='container-fluid'>
        <div className='row'>
          <h2 className='col-12'>Stay up-to-date with what we’re doing</h2>
          <p className='col-12'>35,000+ already joined</p>
          <form className='col-12' onSubmit={(e) => handleSubmit(e)}>
            <div className='row'>
              <div className='email-input-holder col-md-8'>
                <input type="text"
                  name="email"
                  placeholder="Type your email here..."
                  ref={emailRef}
                />
                <span className='error-icon'>
                  <img src={iconError} alt="error icon"></img>
                </span>
                <span className='error-message'>
                  Whoop's make sure it's an email
                </span>
              </div>
              <button className='btn login-btn col-md-3'>Contact Us</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
