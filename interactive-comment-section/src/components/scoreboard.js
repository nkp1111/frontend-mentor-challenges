import React from 'react'
import PlusIcon from '../assets/images/icon-plus.svg'
import MinusIcon from '../assets/images/icon-minus.svg'


function scoreboard({ score }) {
  return (
    <div>
      <img src={PlusIcon} alt='' />
      <span>{score}</span>
      <img src={MinusIcon} alt='' />
    </div>
  )
}

export default scoreboard
