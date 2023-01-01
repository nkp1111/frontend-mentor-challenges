import React from 'react'
import DownloadSection from './DownloadSection'
import FaqSection from './FaqSection'
import FeatureSection from './FeatureSection'
import Homepage from './Homepage'

function index() {
  return (
    <main>
      {/* front page  */}
      <Homepage />
      {/* feature section  */}
      <FeatureSection />
      {/* download section  */}
      <DownloadSection />
      {/* FAQ section  */}
      <FaqSection />
    </main>
  )
}

export default index
