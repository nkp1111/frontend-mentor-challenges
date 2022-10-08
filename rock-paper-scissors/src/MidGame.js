import React from 'react'
import useGlobalContext from './context'

function MidGame() {

  const { playerChoice, computerChoice } = useGlobalContext()
  return (
    <div className='midgame'>
      <div>You Picked</div>
      <div></div>
      <div>The House Picked</div>
      <div className={playerChoice.name}><img src={playerChoice.img} alt={playerChoice.name} /></div>
      <div></div>
      <div className={computerChoice.name}><img src={computerChoice.img} alt={computerChoice.name} /></div>
    </div>
  )
}

export default MidGame
