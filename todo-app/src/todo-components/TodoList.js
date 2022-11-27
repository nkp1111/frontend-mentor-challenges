import React from 'react'
import { BiCircle } from 'react-icons/bi'

function TodoList() {
  return (
    <ul>
      <li> <BiCircle className="circle" />Complete online javascript course</li>
      <li><BiCircle className="circle" />Jog around the park</li>
      <li><BiCircle className="circle" />Meditation</li>
    </ul>
  )
}

export default TodoList
