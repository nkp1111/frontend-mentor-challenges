import React from 'react'
import { companyData } from '../data'

function ComapnyDropdown({ sidebar }) {

  return (
    <div
      style={sidebar !== undefined ? {
        position: 'absolute',
        top: '80',
        left: '320'
      } :
        { backgroundColor: 'white' }}>
      <ul style={{ transition: 'linear 0.8s all' }}>
        {companyData.map(item => {
          return (
            <li key={item}>
              {item}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ComapnyDropdown
