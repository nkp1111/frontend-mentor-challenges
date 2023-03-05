import React from 'react'

function MainContent() {
  return (
    <div className='main-content'>
      <div className="d-flex flex-column">
        <h1 className='main-heading order-2'>Powerful insights into your team</h1>
        <p><span>New</span>Monograph Dashboard</p>
      </div>
      <p className='description'>
        Project planning and time tracking for agile teams
      </p>

      <div className="btn-holder d-flex align-items-center">
        <button className="btn">Schedule a demo</button>
        <span>to see a preview</span>
      </div>
    </div>
  )
}

export default MainContent
