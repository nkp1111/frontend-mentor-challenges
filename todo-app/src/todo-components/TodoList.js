import React from 'react'
import Circle from './circle'
import { GrClose } from 'react-icons/gr'

function TodoList() {
  return (
    <ul id="todo-list">
      <li>
        <Circle />
        <span>Complete online javascript course</span>
        <GrClose className='close-btn' />
      </li>
      <li> <Circle /><span>Jog around the park</span></li>
      <li> <Circle /><span>Meditation</span></li>
    </ul>
  )
}

export default TodoList
