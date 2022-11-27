import React from 'react'
import { BiCircle } from 'react-icons/bi'

function Search() {
  return (
    <form>
      <BiCircle className="circle" />
      <input type="text" placeholder='Add todo tasks...' id="search bar" />
    </form>
  )
}

export default Search
