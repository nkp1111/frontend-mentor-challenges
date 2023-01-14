import React, { useState } from 'react'
import "./main.css"
import FrontPage from './FrontPage'
import StatsInfo from './StatsInfo'
import AboutSection from './AboutSection'
import CloseModal from '../modal/CloseModal'

function Index() {

  const [showModal, setShowModal] = useState(false)
  console.log(showModal)
  return (
    <main className='main'>
      <FrontPage setShowModal={setShowModal} />
      <StatsInfo />
      <AboutSection setShowModal={setShowModal} />
      <div className='modal-holder'>
        {showModal && <CloseModal setShowModal={setShowModal} />}
      </div>
    </main>
  )
}

export default Index
