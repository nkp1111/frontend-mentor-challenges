import React from 'react'
import { featureSectionArticles } from '../../assets/data'

function FeatureArticles() {
  return (
    <div>
      {featureSectionArticles.map(item => {
        return (
          <article key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        )
      })}
    </div>
  )
}

export default FeatureArticles
