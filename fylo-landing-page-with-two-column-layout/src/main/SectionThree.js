import React from 'react'
import Form from '../component/form'

function SectionThree() {
  return (
    <section className='section-three container-fluid'>
      <div className="row">
        <div className="col-md-6">
          {/* section content  */}
          <h2 className="section-heading">
            Get early access today
          </h2>
          <p>
            It only takes a minute to sign up and our free starter tier is extremely generous.
            If you have any questions, our support team would be happy to help you.
          </p>
        </div>
        <div className="col-md-6">
          <Form />
        </div>
      </div>
    </section>
  )
}

export default SectionThree
