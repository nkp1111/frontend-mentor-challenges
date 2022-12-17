import React from 'react'
import { mainBottomSectionData } from '../assets/data'
import DarkModeImage from '../assets/images/image-about-dark.jpg'
import LightModeImage from '../assets/images/image-about-light.jpg'


function BottomSection() {
  return (
    <section className='bottom-section row'>

      <div className='col-lg-4 col-md-3 order-2'>
        <h2>{mainBottomSectionData.heading}</h2>
        <p>{mainBottomSectionData.description}</p>
      </div>
      <div className='col-lg-4 col-md-6 order-1'>
        <img src={DarkModeImage} alt="dark mode furniture" />
      </div>
      <div className='col-lg-4 col-md-3 order-3'>
        <img src={LightModeImage} alt="light mode furniture" />
      </div>

    </section>
  )
}

export default BottomSection
