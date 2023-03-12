import React from 'react'
import { testimonialSectionArticles } from '../../assets/data'

function TestimonialsSection() {
  return (
    <section className='testimonial-section'>
      <h2 className='section-heading invisible'>Testimonial Section</h2>

      <div className="container-fluid">
        <div className="article-holder row">
          {testimonialSectionArticles.map(item => {
            return (
              <article className="col-md-4" key={item.id}>
                <div className="card">
                  {/* user info  */}
                  <div className="profile d-flex flex-row-reverse justify-content-end order-2">
                    {/* profile info  */}
                    <div className="info">
                      <h3>{item.user}</h3>
                      <p>{item.position}</p>
                    </div>
                    {/* profile avatar  */}
                    <div className="avatar">
                      <img src={item.image} alt="avatar" />
                    </div>
                  </div>
                  {/* user text  */}
                  <div className="text">
                    {item.text}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>

    </section>
  )
}

export default TestimonialsSection
