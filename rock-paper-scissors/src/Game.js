import React from 'react'
import useGlobalContext from './context'
import GameChoice from './gameChoice'
import GameScore from './GameScore'
import MidGame from './MidGame'

function Game() {

  const { playerChoice, startGame } = useGlobalContext()
  return (
    <div id="game">
      <GameScore />
      {playerChoice === '' || startGame
        ? <GameChoice />
        : <MidGame />}

    </div>
  )
}

export default Game
