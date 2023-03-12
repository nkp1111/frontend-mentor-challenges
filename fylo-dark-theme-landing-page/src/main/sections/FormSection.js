import React, { useEffect } from 'react'
import emailValidation from '../../component/formValidation'


function FormSection() {

  useEffect(() => {
    emailValidation()
  })

  return (
    <section className='form-section'>
      <h2 className='section-heading'>Get early access today</h2>
      <p>
        It only takes a minute to sign up and our free starter tier is extremely generous. If you have any
        questions, our support team would be happy to help you.
      </p>

      <form className="needs-validation d-flex align-items-center" noValidate>
        <div className="flex-fill">
          <label htmlFor="email" className="form-label invisible">First name</label>
          <input type="email" className="form-control" id="email" placeholder='example@fylo.com'
            required />
          <div className="invalid-feedback">
            Looks good!
          </div>
        </div>
        <div>
          <button className="btn">Get Started For Free</button>
        </div>
      </form>
    </section>
  )
}

export default FormSection
