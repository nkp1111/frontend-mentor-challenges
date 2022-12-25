import React from 'react'
import { featureArticleData } from '../assets/data'

function FeatureSection() {
  return (
    <section>
      <h2>Why choose Easybank?</h2>
      <p>
        We leverage Open Banking to turn your bank account into your financial hub. Control
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
    <article className='col-md-3'>
      <div>
        <h3>{item.heading}</h3>
        <p>
          {item.description}
        </p>
      </div>
      <div>
        <img src={item.image} alt={`${item.heading} logo`} />
      </div>
    </article>
  )
}

export default FeatureSection
