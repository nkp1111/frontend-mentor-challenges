import React from 'react'
import { articleItems } from '../assets/data'

function AboutSection() {
  return (
    <section className='about-section'>
      <h2>About this project</h2>
      <p>
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
        to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve
        your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
      </p>

      <p>
        Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer
        to allow notepads, pens, and USB sticks to be stored under the stand.
      </p>

      {articleItems.map(item => {
        return (
          <article key={item.id}>
            <h3>{item.name}</h3>
            <span className='article-cost'>Pledge ${item.cost} or more</span>
            <p>
              {item.description}
            </p>
            <p>{item.item_left} <span>left</span></p>
            <a className='btn'>Select Reward</a>
          </article>
        )
      })}
    </section>
  )
}

export default AboutSection
