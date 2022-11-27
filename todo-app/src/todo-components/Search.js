import React from 'react'
import Circle from './circle'
import useGlobalContext from '../context'

function Search() {

  const { addTodoTask } = useGlobalContext()
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      let searchBar = document.getElementById("search-bar")
      let task = searchBar.value
      if (task) {
        addTodoTask(task)
        searchBar.value = ""
      }
    }}>
      <Circle />
      <input type="text" placeholder='Add todo tasks...' id="search-bar" autoFocus />
    </form>
  )
}

export default Search
