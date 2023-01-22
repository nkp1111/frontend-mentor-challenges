import React from 'react'
import { featureSectionItems } from '../assets/data'

function FeatureSection() {
  return (
    <section className='feature-section'>

      <div className='head-portion'>
        <h2 className='section-heading'>What’s different about Manage?</h2>
        <p>
          Manage provides all the functionality your team needs, without
          the complexity. Our software is tailor-made for modern digital
          product teams.
        </p>
      </div>

      <div className='feature-portion'>
        {featureSectionItems.map(item => {
          return (
            // articles
            <article key={item.id}>
              {/**flex direction row reverse */}
              <div className='article-head d-flex'>
                <h3 className='article-heading'>{item.title}</h3>
                <span className='btn-orange'>0{item.id}</span>
              </div>
              <div className='article-body'>
                <p>{item.description}</p>
              </div>
            </article>
          )
        })}
      </div>

    </section>
  )
}

export default FeatureSection
