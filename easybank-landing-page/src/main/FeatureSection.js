import React from 'react'
import { featureArticleData } from '../assets/data'

function FeatureSection() {
  return (
    <section className='feature-section'>
      <h2>Why choose Easybank?</h2>
      <p>
        We leverage Open Banking to turn your bank account into your financial hub.<br /> Control
        your finances like never before.
      </p>

      <div className='row'>
        {featureArticleData.map(item => {
          return (
            <FeatureArticle item={item} key={item.id} />
          )
        })}
      </div>
    </section>
  )
}

const FeatureArticle = ({ item }) => {
  return (
    <article className='col-md-3 row feature-article'>
      <div className='col-12 order-2'>
        <h3>{item.heading}</h3>
        <p>
          {item.description}
        </p>
      </div>

      <div className='col-12 order-1'>
        <img src={item.image} alt={`${item.heading} logo`} />
      </div>
    </article>
  )
}

export default FeatureSection
