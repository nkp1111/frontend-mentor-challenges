import React from 'react'
import { removeIcon } from '../assets/data'
import useGlobalContext from '../context'

function FilterBox({ tags }) {

  const { setTags } = useGlobalContext()
  return (
    <div className='filter-box 
    d-flex'>
      <ul className='filter-holder d-flex'>
        {tags.map((tag, ind) => {
          return (
            <li key={ind}
              className="filter-item">{tag}
              <img src={removeIcon}
                alt="remove icon"
                className='remove-icon' />
            </li>
          )
        })}
      </ul>
      <button className='btn clear-btn ms-auto'
        onClick={() => {
          setTags([])
        }}>Clear</button>
    </div>
  )
}

export default FilterBox
