import React from 'react'
import useGlobalContext from './context'
import GameChoice from './gameChoice'
import ScoreBoard from './Scoreboard'
import MidGame from './MidGame'

function Game() {

  const { playerChoice, startGame } = useGlobalContext()
  return (
    <div id="game">
      <ScoreBoard />
      {playerChoice === '' || startGame
        ? <GameChoice />
        : <MidGame />}

    </div>
  )
}

export default Game
