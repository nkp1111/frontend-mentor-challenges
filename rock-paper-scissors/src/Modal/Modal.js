import React from 'react'
import useGlobalContext from '../context'

function Modal() {

  const { setModalOpen, gameMode, handleGameMode } = useGlobalContext()
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
          src={gameMode === 'easy'
            ? 'https://raw.githubusercontent.com/nkp1111/frontend-mentor-challenges/2b55ec5c74cce415cd1257c4757ad2b016616421/rock-paper-scissors/src/assets/images/image-rules.svg'
            : 'https://raw.githubusercontent.com/nkp1111/frontend-mentor-challenges/b432a35d7eca4159e5628892ade55edd941df210/rock-paper-scissors/src/assets/images/image-rules-bonus.svg'}
          alt="rock paper scissors rules" />
      </div>
      <button className='change-mode'
        onClick={() => handleGameMode(gameMode)}
      >{gameMode === 'easy' ? 'Hard' : 'Easy'}</button>
    </section>
  )
}

export default Modal
