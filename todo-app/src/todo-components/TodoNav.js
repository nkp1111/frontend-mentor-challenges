import React from 'react'

function TodoNav() {
  return (
    <nav>
      <span>5 items left</span>
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
