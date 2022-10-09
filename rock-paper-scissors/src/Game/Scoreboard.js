import React from 'react'
import useGlobalContext from '../context'

function GameScore() {

  const { score } = useGlobalContext()
  return (
    <section className='score-board'>
      <h2>Score Board</h2>
      <img
        src="https://raw.githubusercontent.com/nkp1111/frontend-mentor-challenges/98c203fa86b9f72c246559b69755eb87e8d41bb6/rock-paper-scissors/src/assets/images/logo.svg"
        alt="logo" />
      <div className='score'>
        <p>Score</p>
        <p>{score}</p>
      </div>
    </section>
  )
}

export default GameScore
