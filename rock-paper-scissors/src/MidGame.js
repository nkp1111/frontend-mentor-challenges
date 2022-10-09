import React from 'react'
import useGlobalContext from './context'
import ShowResult from './ShowResult';

function MidGame() {

  const { playerChoice, computerChoice, winner } = useGlobalContext();

  return (
    <div className={winner ? 'midgame active' : 'midgame'}>
      <div>You Picked</div>
      <div></div>
      <div>The House Picked</div>
      <div className={playerChoice.name}><img src={playerChoice.img} alt={playerChoice.name} /></div>
      <ShowResult />
      <div className={computerChoice.name}><img src={computerChoice.img} alt={computerChoice.name} /></div>
    </div>
  )
}

export default MidGame
