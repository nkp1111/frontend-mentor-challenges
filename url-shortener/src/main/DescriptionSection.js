import React from 'react'
import { articleData } from '../assets/data'

function DescriptionSection() {
  return (
    <section id="description-section">
      {/* Description section */}
      <h2>Advanced Statistics</h2>
      <p className='description-info-text'>
        Track how your links are performing across the web with our
        advanced statistics dashboard.
      </p>
      <div className='article-holder row'>
        {articleData.map(item => {
          return (
            <article className='col-md-4' key={item.id}>
              <div className='background-line'></div>
              <div
                className='article-content 
              row col-md-12'>
                <h3 className='col-12 order-2'>{item.heading}</h3>
                <p className='col-12 order-3'>
                  {item.description}
                </p>
                <img src={item.image} alt={`icon for ${item.heading}`} className='col-12 order-1' />
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default DescriptionSection
