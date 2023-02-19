import React from 'react'

function TopSection() {
  return (
    <div className='col-md-6'>
      <h1 className='main-heading'>Your Result</h1>
      <div className='score-board'>
        <span>76</span>
        <p>of 100</p>
      </div>
      <div className='congrats-msg-box'>
        <span>Great</span>
        <p>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  )
}

export default TopSection
