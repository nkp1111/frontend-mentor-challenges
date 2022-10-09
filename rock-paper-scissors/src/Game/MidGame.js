import React from 'react'
import useGlobalContext from '../context'
import ShowResult from './ShowResult';

function MidGame() {

  const { playerChoice, computerChoice, winner, resultViewChange } = useGlobalContext();

  return (
    <section className={winner ? 'midgame active' : 'midgame'}>
      <h2>Result and Restart</h2>
      <div>You Picked</div>
      <div></div>
      <div>The House Picked</div>
      <div className={playerChoice.name}><img src={playerChoice.img} alt={playerChoice.name} /></div>
      {resultViewChange === false ? <ShowResult /> : <div></div>}
      <div className={computerChoice.name}><img src={computerChoice.img} alt={computerChoice.name} /></div>
      {resultViewChange === true && <ShowResult />}
    </section>
  )
}

export default MidGame
