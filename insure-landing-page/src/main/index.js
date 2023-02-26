import React from 'react'
import { introDesktop, introMobile } from '../assets/data'
import FrontPage from './FrontPage'

function index() {
  return (
    <main>
      <div className="container-fluid">
        {/* front page  */}
        <FrontPage {...{ introDesktop, introMobile }} />
      </div>
    </main>
  )
}

export default index
