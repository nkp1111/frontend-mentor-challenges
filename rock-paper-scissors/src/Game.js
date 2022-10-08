import React from 'react'

function Game() {
  return (
    <div id="game">
      <div className='score-board'>
        <img
          src="https://raw.githubusercontent.com/nkp1111/frontend-mentor-challenges/98c203fa86b9f72c246559b69755eb87e8d41bb6/rock-paper-scissors/src/assets/images/logo.svg"
          alt="logo" />
        <div className='score'>
          <p>Score</p>
          <p>10</p>
        </div>
      </div>
      <div className='game-choice'>
        <img
          src="https://raw.githubusercontent.com/nkp1111/frontend-mentor-challenges/98c203fa86b9f72c246559b69755eb87e8d41bb6/rock-paper-scissors/src/assets/images/bg-triangle.svg"
          alt="triangle" />
        <img src="https://raw.githubusercontent.com/nkp1111/frontend-mentor-challenges/98c203fa86b9f72c246559b69755eb87e8d41bb6/rock-paper-scissors/src/assets/images/icon-paper.svg" alt="paper sign logo" />
        <img src="https://raw.githubusercontent.com/nkp1111/frontend-mentor-challenges/98c203fa86b9f72c246559b69755eb87e8d41bb6/rock-paper-scissors/src/assets/images/icon-scissors.svg" alt="scissors sign logo" />
        <img src="https://raw.githubusercontent.com/nkp1111/frontend-mentor-challenges/98c203fa86b9f72c246559b69755eb87e8d41bb6/rock-paper-scissors/src/assets/images/icon-rock.svg" alt="rock sign logo" />
      </div>
    </div>
  )
}

export default Game
