import React from 'react'
import PlusIcon from '../assets/images/icon-plus.svg'
import MinusIcon from '../assets/images/icon-minus.svg'


function scoreboard({ score }) {
  return (
    <div id="scoreboard" className='d-flex justify-content-center align-items-center'>
      <img src={PlusIcon} alt='plus-icon' />
      <span>{score}</span>
      <img src={MinusIcon} alt='minus-icon' />
    </div>
  )
}

export default scoreboard
