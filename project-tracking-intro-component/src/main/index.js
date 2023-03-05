import React from 'react'
import MainContent from './MainContent'
import { imageIllustration } from '../assets/data'
import "./main.css"

function index() {
  return (
    <main>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            {/* main content  */}
            <MainContent />
          </div>
          <div className="col-md-6">
            {/* hero image  */}
            <img src={imageIllustration} alt="illustration" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default index
