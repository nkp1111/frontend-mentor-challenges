import React from 'react'

function StatsInfo() {
  return (
    <div className='stats-page'>
      <div >
        <span className='stat-head'>$89,914</span>
        <p className='stat-info'>of $100,000 backed</p>
      </div>
      <hr></hr>
      <div>
        <span className='stat-head'>5,007</span>
        <p className='stat-info'>total backers</p>
      </div>
      <hr></hr>
      <div>
        <span className='stat-head'>56</span>
        <p className='stat-info'>days left</p>
      </div>
      <div className="amount-left-bar"></div>
    </div>
  )
}

export default StatsInfo
