import React, { useState } from 'react'
import "./main.css"
import FrontPage from './FrontPage'
import StatsInfo from './StatsInfo'
import AboutSection from './AboutSection'
import Modal from '../modal/index'

function Index() {

  const [showModal, setShowModal] = useState(false)

  const handleModal = () => {
    let body = document.querySelector("body")
    if (showModal) {
      setShowModal(false)
      body.classList.remove("modal-view")
    } else {
      setShowModal(true)
      body.classList.add("modal-view")
    }
  }

  return (
    <main className='main'>
      <FrontPage handleModal={handleModal} />
      <StatsInfo />
      <AboutSection handleModal={handleModal} />
      <div className='modal-holder'>
        {showModal && <Modal handleModal={handleModal} />}
      </div>
    </main>
  )
}

export default Index
