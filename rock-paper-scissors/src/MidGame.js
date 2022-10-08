import React from 'react'
import useGlobalContext from './context'

function MidGame() {

  const { playerChoice, computerChoice } = useGlobalContext()
  return (
    <div>
      <div>You Picked</div>
      <div>The House Picked</div>
      <div><img src={playerChoice.img} alt={playerChoice.name} /></div>
      <div><img src={computerChoice.img} alt={computerChoice.name} /></div>
    </div>
  )
}

export default MidGame
