import React from 'react'
import useGlobalContext from './context'

function ShowResult() {

  const { setStartGame, winner } = useGlobalContext();
  let winMsg = ''
  let color = 'red'
  if (winner !== '') {
    winMsg = winner === 'tie'
      ? 'A Tie !'
      : winner === 'player'
        ? 'You Won'
        : 'You Lose'
  }

  /* Different colors for diff outcome */
  // if (winMsg === 'A Tie !') {
  //   color = 'yellow'
  // } else if (winMsg === 'You Won') {
  //   color = 'green'
  // } else if (winMsg === 'You Lose') {
  //   color = 'red'
  // }
  return (
    <div className='show-result'>
      <p>
        {winMsg}
      </p>
      <button className='playAgain-btn'
        style={{ color }}
        onClick={() => setStartGame(true)}>Play Again</button>
    </div>
  )
}

export default ShowResult
