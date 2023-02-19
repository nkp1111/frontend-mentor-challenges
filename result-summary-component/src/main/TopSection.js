import React from 'react'

function TopSection() {
  return (
    <div className='col-md-6 front-page'>
      <h1 className='main-heading'>Your Result</h1>
      <div className='final-score d-flex flex-column justify-content-around'>
        <span>76</span>
        <p>of 100</p>
      </div>
      <div className='msg-box'>
        <span>Great</span>
        <p>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  )
}

export default TopSection
