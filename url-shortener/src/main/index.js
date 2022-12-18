import React from 'react'
import FormSection from './FormSection'
import FrontSection from './FrontSection'
import DescriptionSection from './DescriptionSection'
import EndSection from './EndSection'

function index() {
  return (
    <main>
      <h1 className='hidden-heading'>URL Shortener</h1>
      <FrontSection />
      <FormSection />
      <DescriptionSection />
      <EndSection />
    </main>
  )
}

export default index
