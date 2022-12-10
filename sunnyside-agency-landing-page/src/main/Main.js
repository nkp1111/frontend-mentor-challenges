import React from 'react'
import FrontSection from './FrontSection'
import GridSections from './GridSections'
import TestimonialSection from './TestimonialSection'
import ImageSection from './ImageSection'
import useGlobalContext from '../context'

function Main() {

  const { showNav } = useGlobalContext()
  return (
    <main
      className={showNav ? "hide" : ""}
    >
      <h1 className='big-heading'>We are creatives</h1>
      <FrontSection />
      <GridSections />
      <TestimonialSection />
      <ImageSection />
    </main>
  )
}

export default Main
