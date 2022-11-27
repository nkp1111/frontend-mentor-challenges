import React from 'react'
import Search from './todo-components/Search'
import TodoList from './todo-components/TodoList'
import TodoNav from './todo-components/TodoNav'

function Main() {
  return (
    <main>
      <Search />
      <TodoList />
      <TodoNav />
    </main>
  )
}

export default Main
