import React from 'react'
import FrontSection from './FrontSection'
import GridSections from './GridSections'
import TestimonialSection from './TestimonialSection'

function Main() {
  return (
    <main >
      <h1 className='big-heading'>We are creatives</h1>
      <FrontSection />
      <GridSections />
      <TestimonialSection />
    </main>
  )
}

export default Main
