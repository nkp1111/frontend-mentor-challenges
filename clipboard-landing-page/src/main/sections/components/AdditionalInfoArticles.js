import React from 'react'
import { additionalInfoArticlesData } from '../../../assets/data'

function AdditionalInfoArticles() {
  return (
    <div className='row'>
      {additionalInfoArticlesData.map(item => {
        return (
          <article key={item.id} className="col-md-4 d-flex flex-column justify-content-start">
            <div className="info order-2">
              <h3 className='article-heading'>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <div className="article-img">
              <img src={item.icon} alt="." />
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default AdditionalInfoArticles
