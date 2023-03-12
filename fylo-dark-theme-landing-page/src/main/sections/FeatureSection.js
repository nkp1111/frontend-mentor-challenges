import React from 'react'
import FeatureSectionInfo from './FeatureSectionInfo'
import FeatureSectionArticles from './FeatureSectionArticles'

function FeatureSection() {
  return (
    <section className='feature-section'>
      {/* reverse layout section articles appear at top and section content at bottom */}
      <div className="container-fluid d-flex flex-column-reverse">

        {/*first row  : section bottom layout info  */}
        <FeatureSectionInfo />

        {/* second row: section top layout structure  */}
        <FeatureSectionArticles />
      </div>
    </section>
  )
}



export default FeatureSection
