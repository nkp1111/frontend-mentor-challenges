import React from 'react'
import PlusIcon from '../assets/images/icon-plus.svg'
import MinusIcon from '../assets/images/icon-minus.svg'
import useGlobalContext from '../context'


function Scoreboard({ id }) {

  const { scores, addScore, commentData } = useGlobalContext()

  return (
    <div className='scoreboard d-flex justify-content-center align-items-center'>
      <img src={PlusIcon} alt='plus-icon'
        onClick={() => {
          addScore(commentData, id, "add")
        }} />
      <span>{scores[id]}</span>
      <img src={MinusIcon} alt='minus-icon'
        onClick={() => {
          if (scores[id] > 0) {
            addScore(commentData, id, "minus")
          }
        }} />
    </div>
  )
}

export default Scoreboard
