import React from 'react'

function FrontPage() {
  return (
    <div className='front-page'>
      {/* front page info  */}
      <div className="info">
        <h1 className='main-heading'>A history of everything you copy</h1>
        <p>
          Clipboard allows you to track and organize everything you
          copy. Instantly access your clipboard on all your devices.
        </p>
        <div className="btn-holder">
          <button className="btn ios-btn">Download for iOS</button>
          <button className="btn mac-btn">Download for Mac</button>
        </div>
      </div>
    </div>
  )
}

export default FrontPage
