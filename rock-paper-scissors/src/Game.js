import React from 'react'
import useGlobalContext from './context'
import GameChoice from './gameChoice'
import GameScore from './GameScore'
import MidGame from './MidGame'

function Game() {

  const { playerChoice } = useGlobalContext()
  return (
    <div id="game">
      <GameScore />
      {playerChoice !== '' ? <MidGame /> : <GameChoice />}

    </div>
  )
}

export default Game
