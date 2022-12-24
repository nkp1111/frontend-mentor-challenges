import React from 'react'
import { removeIcon } from '../assets/data'

function FilterBox({ filters }) {

  return (
    <div className='filter-box 
    d-flex'>
      <ul className='filter-holder d-flex'>
        {filters.map(filter => {
          return (
            <li key={filter}
              className="filter-item">{filter}
              <img src={removeIcon}
                alt="remove icon"
                className='remove-icon' />
            </li>
          )
        })}
      </ul>
      <button className='btn clear-btn ms-auto'>Clear</button>
    </div>
  )
}

export default FilterBox
