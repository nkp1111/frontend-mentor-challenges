import React from 'react'
import { filters, removeIcon } from '../assets/data'

function FilterBox() {
  return (
    <div className='filter-box'>
      <ul>
        {filters.map(filter => {
          return (

            <li key={filter}>{filter}
              <img src={removeIcon} alt="remove icon"
                className='bg-dark' />
            </li>

          )
        })}
      </ul>
      <button className='btn'>Clear</button>
    </div>
  )
}

export default FilterBox
