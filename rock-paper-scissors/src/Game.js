import React from 'react'
import GameChoice from './gameChoice'
import GameScore from './GameScore'

function Game() {
  return (
    <div id="game">
      <GameScore />
      <GameChoice />
    </div>
  )
}

export default Game
