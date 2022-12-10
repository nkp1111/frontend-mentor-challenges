import React from 'react'
import { testimonialData } from '../assets/data/testimonialData'
import EmillyImage from '../assets/images/image-emily.jpg'
import ThomasImage from '../assets/images/image-thomas.jpg'
import JennieImage from '../assets/images/image-jennie.jpg'
let avatarImages = [EmillyImage, ThomasImage, JennieImage]

function TestimonialSection() {
  return (
    <section id="testimonial-section">
      <h2 className='testimonial-heading'>Client testimonials</h2>
      <div className='row gy-3'>
        {testimonialData.map(item => {
          return (
            <article key={item.id}
              className='col-md-4 user d-flex flex-column'>
              <div className='order-1'>
                <h3 className='user-name'>{item.name}</h3>
                <p className='user-position'>{item.position}</p>
              </div>
              <div className='order-0'>
                <img src={avatarImages[item.id - 1]} alt="profile avatar" className='user-image' />
                <p className='user-text'>{item.comment}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default TestimonialSection
