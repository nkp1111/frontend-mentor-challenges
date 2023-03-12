import React from 'react'
import { featureSectionArticles } from '../../assets/data'

function FeatureSectionArticles() {
  return (
    <div className="row feature-articles">
      {featureSectionArticles.map(item => {
        return (
          <article className="col-md-6 flex-body-center" key={item.id}>
            {/* article info  */}
            <div className="article-info order-2">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            {/* article image  */}
            <div className="article-img">
              <img src={item.image} alt="." />
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default FeatureSectionArticles
