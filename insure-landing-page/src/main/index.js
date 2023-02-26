import React from 'react'
import { introDesktop, introMobile, featureSectionArticle } from '../assets/data'
import FeatureSection from './FeatureSection'
import FrontPage from './FrontPage'

function index() {
  return (
    <main>
      <div className="container-fluid">
        {/* front page  */}
        <FrontPage {...{ introDesktop, introMobile }} />
        {/* feature section  */}
        <FeatureSection featureSectionArticle={featureSectionArticle} />
      </div>
    </main>
  )
}

export default index
