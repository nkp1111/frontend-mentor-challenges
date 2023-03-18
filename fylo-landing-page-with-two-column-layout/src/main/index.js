import React from 'react'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'

function index() {
  return (
    <main>
      <h1 className='main-heading invisible'>Fylo landing page with two column layout</h1>
      <div className="container-fluid">
        <SectionOne />
        <SectionTwo />
      </div>
    </main>
  )
}

export default index
