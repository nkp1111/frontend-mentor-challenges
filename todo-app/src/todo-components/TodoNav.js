import React from 'react'

function TodoNav() {
  return (
    <nav>
      <span>5 items left</span>
      <ul>
        <li>All</li>
        <li>Active</li>
        <li>Completed</li>
      </ul>
      <button>Clear completed</button>
    </nav>
  )
}

export default TodoNav
