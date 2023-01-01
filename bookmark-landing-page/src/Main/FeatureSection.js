import React from 'react'
import { articleData } from '../assets/data'

function FeatureSection() {

  let activeArticle = articleData[0]
  return (
    <section className='feature-section'>
      <div className='row'>
        <h2>Features</h2>
        <p>
          Our aim is to make it quick and easy for you to access your favourite websites.
          Your bookmarks sync between your devices so you can access them on the go.
        </p>
      </div>

      {/* article holder */}
      <div className='row'>
        {/* articles tag  */}
        <ul className='tag-holder'>
          {articleData.map(item => {
            return (
              <li className='tag-items' key={item.id}>{item.tagline}</li>
            )
          })}
        </ul>

        {/* article data  */}
        {activeArticle &&
          <article>
            <div className='row'>
              {/* article info  */}
              <div className='col-md-6'>
                <h3>{activeArticle.heading}</h3>
                <p>{activeArticle.overview}</p>
                <button className='btn'>More Info</button>
              </div>
              {/* article image  */}
              <div className='col-md-6'>
                <div className='row'>
                  <div className='col-12'>
                    <img src={activeArticle.image} alt="illustration background" />
                  </div>
                </div>
              </div>
            </div>
          </article>}
      </div>

    </section>
  )
}

export default FeatureSection
