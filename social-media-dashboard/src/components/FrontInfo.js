import React from 'react'

function FrontInfo({ mode, setMode }) {
  return (
    <div className='front-info row'>
      {/* info  */}
      <div className='col-md-7 info'>
        <h1 className='main-heading'>Social Media Dashboard</h1>
        <p>
          Total Followers: 23,004
        </p>
      </div>
      {/* switch  */}
      <div className='col-md-5 switch-box' onClick={() => setMode(!mode)}>
        <p className='current-mode'>Dark Mode</p>
        <span className='ball'></span>
      </div>
      {/* divider line  */}
      <div className='divider'></div>
    </div>
  )
}

export default FrontInfo
