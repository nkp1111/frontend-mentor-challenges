import React, { useEffect } from 'react'
import emailValidation from './emailValidation'

function Form() {

  useEffect(() => {
    emailValidation()
  })

  return (
    <form className='d-flex needs-validation' noValidate>
      <div>
        <label htmlFor="email" className="form-label visually-hidden">Email</label>
        <input type="email" placeholder='Enter your email' className='form-control' />
        <div className="invalid-feedback">
          Looks good!
        </div>
      </div>
      <div className='ms-auto'>
        <button className="btn fylo-btn">
          Get Started
        </button>
      </div>
    </form>
  )
}

export default Form
