import React from 'react'

function ComapnyDropdown({ sidebar }) {

  return (
    <div
      style={sidebar !== undefined ? {
        position: 'absolute',
        top: '60',
        left: '320'
      } :
        { backgroundColor: 'white' }}>
      <ul>
        <li>History</li>
        <li>Our Team</li>
        <li>Blog</li>
      </ul>
    </div>
  )
}

export default ComapnyDropdown
