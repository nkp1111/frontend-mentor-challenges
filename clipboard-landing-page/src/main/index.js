import React from 'react'
import FrontPage from './FrontPage'
import FeatureSection from './sections/FeatureSection'
import AccessInfoSection from './sections/AccessInfoSection'
import AdditionalInfo from './sections/AdditionalInfo'
import DownloadSection from './sections/DownloadSection'

function index() {
  return (
    <main>
      <FrontPage />
      <FeatureSection />
      <AccessInfoSection />
      <AdditionalInfo />
      <DownloadSection />
    </main>
  )
}

export default index
