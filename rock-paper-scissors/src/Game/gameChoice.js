import React from 'react'
import data from '../assets/data'
import useGlobalContext from '../context'

function GameChoice() {

  const { setPlayerChoice, gameMode } = useGlobalContext()
  return (
    <section className='startgame'>
      <h2>Pick A Choice</h2>
      <img
        src={gameMode === 'easy'
          ? 'https://raw.githubusercontent.com/nkp1111/frontend-mentor-challenges/98c203fa86b9f72c246559b69755eb87e8d41bb6/rock-paper-scissors/src/assets/images/bg-triangle.svg'
          : 'https://raw.githubusercontent.com/nkp1111/frontend-mentor-challenges/b432a35d7eca4159e5628892ade55edd941df210/rock-paper-scissors/src/assets/images/bg-pentagon.svg'}
        alt="triangle" />
      {data.map(item => {
        return (
          <div key={item.name}
            className={item.name}
            onClick={() => setPlayerChoice(item)}>
            <img src={item.img} alt={item.name} />
          </div>
        )
      })}
    </section>
  )
}

export default GameChoice
