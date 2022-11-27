import React from 'react'
import useGlobalContext from '../context'

function TodoNav() {

  const { state, updateShowTodos, clearCompleted } = useGlobalContext()

  let btns = ["all", "active", "completed"]
  return (
    <nav>
      <span>{state.todoLeft} items left</span>
      <ul>
        {btns.map(btn => {
          return (
            <li key={btn}>
              <button
                style={state.showTodos === btn ? { color: "hsl(220, 98%, 61%)" } : {}}
                onClick={() => updateShowTodos(btn)}>{btn}</button>
            </li>
          )
        })}
      </ul>
      <button
        onClick={() => clearCompleted()}>Clear completed</button>
    </nav>
  )
}

export default TodoNav
