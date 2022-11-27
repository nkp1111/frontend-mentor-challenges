import React from 'react'
import Circle from './circle'
import { GrClose } from 'react-icons/gr'
import useGlobalContext from '../context'

function TodoList() {

  const { state: { todoList }, updateCompleted, removeTodoTask } = useGlobalContext()

  return (
    <ul id="todo-list">
      {todoList.map(todo => {
        return (
          <li key={todo.id}
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
      })}

    </ul>
  )
}

export default TodoList
