import React from 'react'
import useGlobalContext from '../context'

function TodoNav() {

  const { state } = useGlobalContext()
  return (
    <nav>
      <span>{state.todoLeft} items left</span>
      <ul>
        <li>
          <button>All</button>
        </li>
        <li><button>Active</button></li>
        <li><button>Completed</button></li>
      </ul>
      <button>Clear completed</button>
    </nav>
  )
}

export default TodoNav
