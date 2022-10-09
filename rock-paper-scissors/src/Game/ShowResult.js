import React from 'react'
import useGlobalContext from '../context'

function ShowResult() {

  const { setStartGame, winner, resultViewChange } = useGlobalContext();
  let winMsg = ''
  let color = 'red'
  if (winner !== '') {
    winMsg = winner === 'tie'
      ? 'A Tie !'
      : winner === 'player'
        ? 'You Won'
        : 'You Lose'
  }

  return (
    <div className={resultViewChange ? 'show-result active' : 'show-result'}>
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
