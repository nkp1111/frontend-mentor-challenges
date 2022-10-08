import React from 'react'
import useGlobalContext from './context'
import GameChoice from './gameChoice'
import GameScore from './GameScore'

function Game() {

  const val = useGlobalContext()
  console.log(val);
  return (
    <div id="game">
      <GameScore />
      <GameChoice />
    </div>
  )
}

export default Game
