import React from 'react'
import frontImage from '../assets/images/illustration-working.svg'

function FrontSection() {
  return (
    <section>
      {/* Front section */}
      <div className='row'>
        <div className='col-md-6'>
          <h2>More than just shorter links</h2>
          <p>
            Build your brand’s recognition and get detailed insights
            on how your links are performing.</p>
          <button>Get Started</button>
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
