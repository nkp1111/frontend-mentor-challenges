import React from 'react'
import { data } from '../assets/navData'

function navbar() {
  return (
    <nav>
      <div className="">
        <ul className="d-flex align-items-center justify-content-center">
          {data.map(d => {
            return (<li key={d}
              className=""
            >{d}</li>)
          })}
        </ul>
      </div>
    </nav>
  )
}

export default navbar
