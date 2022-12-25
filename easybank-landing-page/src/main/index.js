import React, { useEffect, useState } from 'react'
import { mockupsImage } from '../assets/data'
import BlogSection from './BlogSection'
import FeatureSection from './FeatureSection'

function Index() {

  return (
    <main>
      <div className='front-page row'>
        <div className='col-md-6 front-info'>
          <h1 className='big-heading'>
            Next generation digital banking</h1>
          <p className='front-text'>
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

export default Index
