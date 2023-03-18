import React, { useEffect, useState } from 'react'
import emailValidation from './emailValidation'

function Form() {

  useEffect(() => {
    emailValidation()
  })

  useEffect(() => {
    const labels = document.querySelectorAll("label")
    const inputs = document.querySelectorAll("label+input")
    labels.forEach((label, ind) => {
      label.htmlFor = "email-" + ind
      inputs[ind].id = "email-" + ind
    })
  })

  return (
    <form className='d-flex needs-validation' noValidate>
      <div>
        <label htmlFor='email' className="form-label visually-hidden">Email</label>
        <input type="email" placeholder='Enter your email' className='form-control' id="email" />
        <div className="invalid-feedback">
          Looks good!
        </div>
      </div>
      <div>
        <button className="btn fylo-btn">
          Get Started
        </button>
      </div>
    </form>
  )
}

export default Form
