import React from 'react'
import EndPage from './EndPage'
import FeatureSection from './FeatureSection'
import HomePage from './HomePage'
import TestimonialSection from './TestimonialSection'

function index() {
  return (
    <main className='container-fluid'>
      <HomePage />
      <FeatureSection />
      <TestimonialSection />
      <EndPage />
    </main>
  )
}

export default index
