import React from 'react'
import FrontPage from './FrontPage'
import FeatureSection from './FeatureSection'
import "./main.css"

function index() {
  return (
    <main>
      <div className="container-fluid">
        <FrontPage />
        <FeatureSection />
      </div>
    </main>
  )
}

export default index
