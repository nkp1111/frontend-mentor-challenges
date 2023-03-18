import React from 'react'
import SectionOne from './SectionOne'
import SectionThree from './SectionThree'
import SectionTwo from './SectionTwo'
import "./main.css"

function index() {
  return (
    <main>
      <h1 className='main-heading invisible'>Fylo landing page with two column layout</h1>
      <div className="container-fluid">
        <SectionOne />
        <SectionTwo />
      </div>
      <SectionThree />
    </main>
  )
}

export default index
