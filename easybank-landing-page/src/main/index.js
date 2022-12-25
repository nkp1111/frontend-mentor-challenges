import React from 'react'
import { backDekstop, backMobile, mockupsImage } from '../assets/data'
import BlogSection from './BlogSection'
import FeatureSection from './FeatureSection'

function index() {
  return (
    <main>
      <div className='row'>
        <div className='col-md-6'>
          <h1 className='big-heading'>
            Next generation digital banking</h1>
          <p>
            Take your financial life online. Your Easybank account will be a one-stop-shop
            for spending, saving, budgeting, investing, and much more
          </p>
          <button className='btn invite-btn'>
            Request Invite
          </button>
        </div>
        <div className='col-md-6 main-image'>
          <img src={mockupsImage} alt="hero background" />
        </div>
      </div>

      <FeatureSection />
      <BlogSection />
    </main>
  )
}

export default index
