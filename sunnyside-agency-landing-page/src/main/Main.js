import React from 'react'
import FrontSection from './FrontSection'
import GridSections from './GridSections'
import TestimonialSection from './TestimonialSection'
import ImageSection from './ImageSection'

function Main() {
  return (
    <main >
      <h1 className='big-heading'>We are creatives</h1>
      <FrontSection />
      <GridSections />
      <TestimonialSection />
      <ImageSection />
    </main>
  )
}

export default Main
