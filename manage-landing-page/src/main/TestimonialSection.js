import React, { useEffect } from 'react'
import { testimonialSectionItems } from '../assets/data'

function TestimonialSection() {

  useEffect(() => {
    // change carousel article after certain time
    let current = 0
    let carouselChangeTime = 3000
    let carouselItem = document.querySelectorAll(".carousel-item")

    const removeActive = () => {
      // remove active class from each carousel item
      carouselItem.forEach(item => item.classList.remove("active"))
    }

    let interval = setInterval(() => {
      removeActive()
      carouselItem[current].classList.add("active")
      if (current < carouselItem.length - 1) {
        current += 1
      } else {
        current = 0
      }
    }, carouselChangeTime)

  }, [])

  return (
    <section className='testimonial-section'>
      <h2 className="section-heading">What they’ve said</h2>

      <div id="test-carousel" className='carousel slide'>
        <div className='carousel-inner'>
          {testimonialSectionItems.map(item => {
            return (
              <div key={item.id}
                className="carousel-item">
                <div className='carousel-info'>
                  <h3 className='article-heading'>{item.user}</h3>
                  <p>{item.review}</p>
                </div>
                <div className='carousel-img'>
                  <img src={item.avatar} alt={`${item.user} avatar`}></img>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className='carousel c-2'>
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#test-carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#test-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#test-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#test-carousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
      </div>

      <div className='btn-holder'>
        <button className='btn btn-orange'>Get Started</button>
      </div>

    </section>
  )
}

export default TestimonialSection
