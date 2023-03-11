import React from 'react'

function DownloadSection() {
  return (
    <section className='download-section'>
      <h2 className='section-heading'>Clipboard for iOS and Mac OS</h2>
      <p>
        Available for free on the App Store. Download for Mac or iOS, sync with iCloud
        and you’re ready to start adding to your clipboard.
      </p>
      <div className="btn-holder">
        <button className="btn ios-btn">Download for iOS</button>
        <button className="btn mac-btn">Download for Mac</button>
      </div>
    </section>
  )
}

export default DownloadSection
