import React from 'react'
import FeatureSection from './FeatureSection'
import FrontPage from './FrontPage'
import InfoSection from './InfoSection'
import "./main.css"

function index() {
  return (
    <main>
      <FrontPage />
      <InfoSection />
      <FeatureSection />
    </main>
  )
}

export default index
