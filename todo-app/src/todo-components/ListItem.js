import React from 'react'
import useGlobalContext from '../context'
import Circle from './circle'
import { GrClose } from 'react-icons/gr'

function ListItem({ todo }) {

  const { state, updateCompleted, removeTodoTask } = useGlobalContext()

  return (
    <li className={state.completed.includes(todo.id) ? 'completed' : ''}
      onClick={(e) => {
        e.currentTarget.classList.toggle("completed")
        updateCompleted(todo.id)
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
