import React from 'react'
import Form from '../component/form'
import { illustration1 } from '../assets/data'

function SectionOne() {
  return (
    <section className='section-one row'>
      <div className="col-md-6">
        {/* section content  */}
        <h2 className="section-heading">
          All your files in one secure location, accessible anywhere.
        </h2>
        <p>
          Fylo stores your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends,
          family, and co-workers.
        </p>
        <Form />
      </div>
      <div className="col-md-6">
        {/* section image  */}
        <img src={illustration1} alt="illustration" />
      </div>
    </section>
  )
}

export default SectionOne
