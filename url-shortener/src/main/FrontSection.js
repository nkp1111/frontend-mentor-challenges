import React from 'react'
import frontImage from '../assets/images/illustration-working.svg'

function FrontSection() {
  return (
    <section className='container-fluid'>
      {/* Front section */}
      <div className='row'>
        <div className='front-section-info col-md-6'>
          <h2 className='front-section-heading'>More than just shorter links</h2>
          <p>
            Build your brand’s recognition and get detailed insights
            on how your links are performing.</p>
          <button className='front-section-btn btn'>Get Started</button>
        </div>
        <div className='col-md-6'>
          <picture>
            <img
              src={frontImage}
              alt="person sitting onfront of laptop" />
          </picture>
        </div>
      </div>
    </section>
  )
}

export default FrontSection
