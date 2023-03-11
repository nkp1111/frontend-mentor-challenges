import React from 'react'
import FeatureArticles from './components/FeatureArticles'
import { imageComputer } from '../../assets/data'

function FeatureSection() {
  return (
    <section className='feature-section'>
      <h2 className='section-heading'>Keep track of your snippets</h2>
      <p>
        Clipboard instantly stores any item you copy in the cloud,
        meaning you can access your snippets immediately on all your
        devices. Our Mac and iOS apps will help you organize everything.
      </p>

      <div className="feature-info d-flex">
        {/* feature image  */}
        <div className="feature-img">
          <img src={imageComputer} alt="computer" />
        </div>
        {/* feature articles  */}
        <div className="feature-articles">
          <FeatureArticles />
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
