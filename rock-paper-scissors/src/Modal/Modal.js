import React from 'react'
import useGlobalContext from '../context'

function Modal() {

  const { setModalOpen } = useGlobalContext()
  return (
    <section id="modal">
      <h2>Rules for Rock Paper Scissors game</h2>
      <div>
        <p>Rules</p>
        <div className='close-btn'
          onClick={() => setModalOpen(false)}>
          <img
            src="https://raw.githubusercontent.com/nkp1111/frontend-mentor-challenges/2b55ec5c74cce415cd1257c4757ad2b016616421/rock-paper-scissors/src/assets/images/icon-close.svg"
            alt="close button" />
        </div>
      </div>
      <div>
        <img
          src="https://raw.githubusercontent.com/nkp1111/frontend-mentor-challenges/2b55ec5c74cce415cd1257c4757ad2b016616421/rock-paper-scissors/src/assets/images/image-rules.svg"
          alt="rock paper scissors rules" />
      </div>
    </section>
  )
}

export default Modal
