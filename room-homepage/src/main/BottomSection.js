import React from 'react'
import { mainBottomSectionData } from '../assets/data'
import DarkModeImage from '../assets/images/image-about-dark.jpg'
import LightModeImage from '../assets/images/image-about-light.jpg'


function BottomSection() {
  return (
    <section>

      <div>
        <h2>{mainBottomSectionData.heading}</h2>
        <p>{mainBottomSectionData.description}</p>
      </div>
      <div>
        <img src={DarkModeImage} alt="dark mode furniture" />
      </div>
      <div>
        <img src={LightModeImage} alt="light mode furniture" />
      </div>

    </section>
  )
}

export default BottomSection
