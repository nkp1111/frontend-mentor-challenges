import React from 'react'
import { illustrationProductive, iconArrow } from '../../assets/data'

function FeatureSectionInfo() {
  return (
    <div className="row feature-info">
      {/* section info  */}
      <div className="col-md-6 order-2 d-flex flex-column justify-content-center">
        <h2 className='section-heading'>Stay productive, wherever you are</h2>
        <p>
          Never let location be an issue when accessing your files. Fylo has you covered for all of your file
          storage needs.
        </p>
        <p>
          Securely share files and folders with friends, family and colleagues for live collaboration. No email
          attachments required.
        </p>
        <div className='d-flex align-items-center'>
          <a href="#">See how Fylo works</a>
          <div>
            <img src={iconArrow} alt="forward arrow" className='ms-1' />
          </div>
        </div>
      </div>
      {/* section image  */}
      <div className="col-md-6">
        <img src={illustrationProductive} alt="." />
      </div>
    </div>
  )
}

export default FeatureSectionInfo
