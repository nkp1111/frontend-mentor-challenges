import React, { useState } from 'react'
import "./main.css"
import FrontPage from './FrontPage'
import StatsInfo from './StatsInfo'
import AboutSection from './AboutSection'
import Modal from '../modal/index'

function Index() {

  const [showModal, setShowModal] = useState(false)

  return (
    <main className='main'>
      <FrontPage setShowModal={setShowModal} />
      <StatsInfo />
      <AboutSection setShowModal={setShowModal} />
      <div className='modal-holder'>
        {showModal && <Modal setShowModal={setShowModal} />}
      </div>
    </main>
  )
}

export default Index
