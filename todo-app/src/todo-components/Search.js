import React from 'react'
import Circle from './circle'

function Search() {
  return (
    <form>
      <Circle />
      <input type="text" placeholder='Add todo tasks...' id="search bar" autoFocus />
    </form>
  )
}

export default Search
