import React, { useEffect } from 'react'
import { testimonialSectionItems } from '../assets/data'

function TestimonialSection() {

  useEffect(() => {



    let current = 0
    let carouselItem = document.querySelectorAll(".carousel-item")
    carouselItem[current].classList.add("active")
  }, [])

  return (
    <section className='testimonial-section'>
      <h2>What they’ve said</h2>

      <div id="test-carousel" className='carousel slide' data-bs-ride="carousel" data-bs-interval="1000">
        <div className='carousel-inner'>

          {testimonialSectionItems.map(item => {
            return (
              <div key={item.id}
                className="carousel-item">
                <h3>{item.user}</h3>
                <p>{item.review}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
