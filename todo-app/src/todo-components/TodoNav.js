import React from 'react'
import useGlobalContext from '../context'

function TodoNav() {

  const { state, updateShowTodos, clearCompleted } = useGlobalContext()
  return (
    <nav>
      <span>{state.todoLeft} items left</span>
      <ul>
        <li>
          <button
            onClick={() => updateShowTodos("all")}>All</button>
        </li>
        <li>
          <button
            onClick={() => updateShowTodos("active")}>Active</button>
        </li>
        <li>
          <button
            onClick={() => updateShowTodos("completed")}>Completed</button>
        </li>
      </ul>
      <button
        onClick={() => clearCompleted()}>Clear completed</button>
    </nav>
  )
}

export default TodoNav
