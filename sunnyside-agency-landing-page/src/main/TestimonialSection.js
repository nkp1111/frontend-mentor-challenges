import React from 'react'
import { testimonialData } from '../assets/data/testimonialData'

function TestimonialSection() {
  return (
    <section>
      <h2>Client testimonials</h2>
      {testimonialData.map(item => {
        return (
          <article>
            <div>
              <h3>{item.name}</h3>
              <p>{item.position}</p>
            </div>
            <div>
              <img></img>
              <p>{item.comment}</p>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default TestimonialSection
