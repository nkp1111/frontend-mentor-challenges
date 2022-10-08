import React from 'react'
import data from './assets/data'

function GameChoice() {
  return (
    <div className='game-choice'>
      <img
        src="https://raw.githubusercontent.com/nkp1111/frontend-mentor-challenges/98c203fa86b9f72c246559b69755eb87e8d41bb6/rock-paper-scissors/src/assets/images/bg-triangle.svg"
        alt="triangle" />
      {data.map(item => {
        return (
          <div key={item.name}>
            <img src={item.img} alt={item.name} />
          </div>
        )
      })}
    </div>
  )
}

export default GameChoice
