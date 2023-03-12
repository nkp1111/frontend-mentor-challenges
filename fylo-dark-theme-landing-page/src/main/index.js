import React from 'react'
import FrontPage from './FrontPage'
import FeatureSection from './sections/FeatureSection'
import TestimonialsSection from './sections/TestimonialsSection'
import FormSection from './sections/FormSection'

function index() {
  return (
    <main>
      <FrontPage />
      <FeatureSection />
      <TestimonialsSection />
      <FormSection />
    </main>
  )
}

export default index
