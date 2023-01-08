import React from 'react'
import "./main.css"
import FrontPage from './FrontPage'
import StatsInfo from './StatsInfo'
import AboutSection from './AboutSection'

function Index() {
  return (
    <main className='main'>
      <FrontPage />
      <StatsInfo />
      <AboutSection />
    </main>
  )
}

export default Index
