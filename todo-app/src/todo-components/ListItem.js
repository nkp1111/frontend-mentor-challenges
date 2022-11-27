import React from 'react'
import useGlobalContext from '../context'
import Circle from './circle'
import { GrClose } from 'react-icons/gr'

function ListItem({ todo }) {

  const { updateCompleted, removeTodoTask } = useGlobalContext()
  return (
    <li
      onClick={(e) => {
        updateCompleted(todo.id)
        e.currentTarget.classList.toggle("completed")
      }}>
      <Circle id={todo.id} />
      <span>{todo.task}</span>
      <GrClose className='close-btn' onClick={(e) => {
        e.stopPropagation()
        removeTodoTask(todo.id)
      }} />
    </li>
  )
}

export default ListItem
