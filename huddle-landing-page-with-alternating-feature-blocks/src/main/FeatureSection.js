import React from 'react'
import { featureSectionArticles } from '../assets/data'

function FeatureSection() {
  return (
    <section className='feature-section'>
      <div className="floating d-flex flex-column align-items-center justify-content-evenly">
        <h2 className='section-heading'>Ready To Build Your Community?</h2>
        <button className="btn huddle-btn">Get Started For Free</button>
      </div>

      {/* feature section articles  */}
      <div className='article-holder'>
        {featureSectionArticles.map((item, ind) => {
          return (
            <article className='row align-items-center' key={item.id}>
              <div className={`col-md-6 
              ${ind % 2 !== 0 ? "order-2" : ""}`}>
                <h3 className='article-heading'>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <div className="col-md-6">
                <img src={item.image} alt={item.title} />
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default FeatureSection
