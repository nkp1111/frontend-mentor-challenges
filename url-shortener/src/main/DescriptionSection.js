import React from 'react'
import { articleData } from '../assets/data'

function DescriptionSection() {
  return (
    <section>
      {/* Description section */}
      <h2>Advanced Statistics</h2>
      <p>
        Track how your links are performing across the web with our
        advanced statistics dashboard.
      </p>
      <div className='row'>
        {articleData.map(item => {
          return (
            <article className='col-md-4' key={item.id}>
              <h3>{item.heading}</h3>
              <p>
                {item.description}
              </p>
              <img src={item.image} alt={`icon for ${item.heading}`} />
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default DescriptionSection
