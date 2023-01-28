import React from 'react'
import { heroDesktop, heroMobile, } from '../assets/data'

function FrontPage() {
  return (
    <div className='front-page'>
      {/* text on image  */}
      <div className='outer-border'>
        <h1 className='main-heading'>Immersive experiences that deliver</h1>
      </div>
      {/* hero image  */}
      <picture>
        <source srcSet={heroDesktop}
          media="(min-width: 49rem)"></source>
        <img src={heroMobile} alt="mobile hero background"></img>
      </picture>
    </div>
  )
}

export default FrontPage
