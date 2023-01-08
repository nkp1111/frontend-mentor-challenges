import React from 'react'

function StatsInfo() {
  return (
    <div className='stats-page'>
      <div >
        <span className='stat-head'>$89,914</span>
        <span className='stat-info'>of $100,000 backed</span>
      </div>
      <hr></hr>
      <div>
        <span className='stat-head'>5,007</span>
        <span className='stat-info'>total backers</span>
      </div>
      <hr></hr>
      <div>
        <span className='stat-head'>56</span>
        <span className='stat-info'>days left</span>
      </div>
      <div class="amount-left-bar"></div>
    </div>
  )
}

export default StatsInfo
