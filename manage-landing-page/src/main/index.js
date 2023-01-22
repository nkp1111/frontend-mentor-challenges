import React from 'react'
import EndPage from './EndPage'
import FeatureSection from './FeatureSection'
import HomePage from './HomePage'
import TestimonialSection from './TestimonialSection'
import "./main.css"

function index() {
  return (
    <main >
      <HomePage />
      <FeatureSection />
      <TestimonialSection />
      <EndPage />
    </main>
  )
}

export default index
