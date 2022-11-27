import React from 'react'
import useGlobalContext from '../context'
import ListItem from './ListItem'

function TodoList() {

  const { state } = useGlobalContext()

  return (
    <ul id="todo-list">
      {state.todoList.map(todo => {
        if (state.showTodos === "active" && !state.completed.includes(todo.id)) {
          return (
            <ListItem todo={todo} key={todo.id} />
          )
        } else if (state.showTodos === "completed" && state.completed.includes(todo.id)) {
          return (
            <ListItem todo={todo} key={todo.id} />
          )
        } else if (state.showTodos === "all") {
          return (
            <ListItem todo={todo} key={todo.id} />
          )
        }

      })}

    </ul>
  )
}

export default TodoList
