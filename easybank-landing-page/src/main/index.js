import React from 'react'
import { backDekstop, backMobile } from '../assets/data'
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
          <button className='btn'>
            Request Invite
          </button>
        </div>
        <div className='col-md-6'>
          <picture>
            <source srcSet={backMobile} media="(max-width: 787px)" />
            <img src={backDekstop} alt="hero background" />
          </picture>
        </div>
      </div>

      <FeatureSection />
      <BlogSection />
    </main>
  )
}

export default index
