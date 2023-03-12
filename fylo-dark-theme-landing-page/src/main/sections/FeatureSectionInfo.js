import React from 'react'
import { illustrationProductive } from '../../assets/data'

function FeatureSectionInfo() {
  return (
    <div className="row">
      {/* section info  */}
      <div className="col-md-6 order-2">
        <h2 className='section-heading'>Stay productive, wherever you are</h2>
        <p>
          Never let location be an issue when accessing your files. Fylo has you covered for all of your file
          storage needs.
        </p>
        <p>
          Securely share files and folders with friends, family and colleagues for live collaboration. No email
          attachments required.
        </p>
        <p>
          <a href="#">See how Fylo works</a>
          <img src="" alt="" />
        </p>
      </div>
      {/* section image  */}
      <div className="col-md-6">
        <img src={illustrationProductive} alt="." />
      </div>
    </div>
  )
}

export default FeatureSectionInfo
