import React from 'react'
import useGlobalContext from '../context'

function TodoNav() {

  const { state, updateShowTodos, clearCompleted, media } = useGlobalContext()

  return (
    <>
      <nav>
        <span>{state.todoLeft} items left</span>
        {!media && <NavBtn state={state} updateShowTodos={updateShowTodos} />}
        <button
          onClick={() => clearCompleted()}>Clear completed</button>
      </nav>
      {media && <NavBtn state={state} updateShowTodos={updateShowTodos} />}
    </>
  )
}

function NavBtn({ state, updateShowTodos }) {
  let btns = ["all", "active", "completed"]
  return (
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
  )
}

export default TodoNav
