import React from 'react'

function GameScore() {
  return (
    <div className='score-board'>
      <img
        src="https://raw.githubusercontent.com/nkp1111/frontend-mentor-challenges/98c203fa86b9f72c246559b69755eb87e8d41bb6/rock-paper-scissors/src/assets/images/logo.svg"
        alt="logo" />
      <div className='score'>
        <p>Score</p>
        <p>10</p>
      </div>
    </div>
  )
}

export default GameScore
