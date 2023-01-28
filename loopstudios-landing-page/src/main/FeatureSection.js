import React from 'react'
import { featureArticles } from '../assets/data'

function FeatureSection() {
  return (
    <section className='feature-section'>

      <div className='container-fluid'>
        <h2 className='section-heading'>Our creations</h2>
        <div className='article-holder row'>
          {featureArticles.map(item => {
            return (
              <article key={item.id} className="feature-article col-md-6 col-lg-3">
                <h3 className='article-heading'>{item.title}</h3>
                <picture>
                  <source srcSet={item.image.desktop}
                    media="(min-width: 49rem)"></source>
                  <img src={item.image.mobile}
                    alt={`${item.title} mobile`}></img>
                </picture>
              </article>
            )
          })}
        </div>

        <div className='btn-holder'>
          <button className='btn'>See all</button>
        </div>

      </div>


    </section >
  )
}

export default FeatureSection
