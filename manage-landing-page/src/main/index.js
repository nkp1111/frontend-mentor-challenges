import React from 'react'
import FeatureSection from './FeatureSection'
import HomePage from './HomePage'
import TestimonialSection from './TestimonialSection'

function index() {
  return (
    <main className='container-fluid'>
      <HomePage />
      <FeatureSection />
      <TestimonialSection />
    </main>
  )
}

export default index
