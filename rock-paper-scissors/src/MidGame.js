import React from 'react'
import useGlobalContext from './context'

function MidGame() {

  const { playerChoice, computerChoice, winner } = useGlobalContext();
  let winMsg = ''
  let color = 'red'
  if (winner !== '') {
    winMsg = winner === 'tie'
      ? 'A Tie !'
      : winner === 'player'
        ? 'You Won'
        : 'You Lose'
  }
  // if (winMsg === 'A Tie !') {
  //   color = 'yellow'
  // } else if (winMsg === 'You Won') {
  //   color = 'green'
  // } else if (winMsg === 'You Lose') {
  //   color = 'red'
  // }

  return (
    <div className={winner ? 'midgame active' : 'midgame'}>
      <div>You Picked</div>
      <div></div>
      <div>The House Picked</div>
      <div className={playerChoice.name}><img src={playerChoice.img} alt={playerChoice.name} /></div>
      <div className='show-result'>
        <p>
          {winMsg}
        </p>
        <button className='playAgain-btn'
          style={{ color }}>Play Again</button>
      </div>
      <div className={computerChoice.name}><img src={computerChoice.img} alt={computerChoice.name} /></div>
    </div>
  )
}

export default MidGame
