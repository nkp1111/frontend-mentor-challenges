import React from 'react'
import TopSection from './TopSection'
import BottomSection from './BottomSection'
import "./main.css"

function index() {
  return (
    <main className='d-flex'>
      <div className='container-fluid'>
        <div className='row'>
          <TopSection />
          <BottomSection />
        </div>
      </div>
    </main>
  )
}

export default index
