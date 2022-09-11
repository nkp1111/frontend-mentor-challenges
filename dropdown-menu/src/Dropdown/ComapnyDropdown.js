import React from 'react'

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
        <li>History</li>
        <li>Our Team</li>
        <li>Blog</li>
      </ul>
    </div>
  )
}

export default ComapnyDropdown
