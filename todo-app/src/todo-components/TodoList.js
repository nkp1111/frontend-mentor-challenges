import React from 'react'
import Circle from './circle'
import { GrClose } from 'react-icons/gr'
import useGlobalContext from '../context'

function TodoList() {

  const { state: { todoList }, updateCompleted } = useGlobalContext()

  return (
    <ul id="todo-list">
      {todoList.map(todo => {
        return (
          <li key={todo.id}
            onClick={(e) => {
              updateCompleted(todo.id)
              e.target.classList.toggle("completed")
            }}>
            <Circle />
            <span>{todo.task}</span>
            <GrClose className='close-btn' />
          </li>
        )
      })}

    </ul>
  )
}

export default TodoList
