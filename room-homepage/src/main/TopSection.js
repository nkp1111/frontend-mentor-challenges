import React from 'react'
import { mainData } from '../assets/data'
import desktopImage1 from '../assets/images/desktop-image-hero-1.jpg'
import desktopImage2 from '../assets/images/desktop-image-hero-2.jpg'
import desktopImage3 from '../assets/images/desktop-image-hero-3.jpg'
import mobileImage1 from '../assets/images/mobile-image-hero-1.jpg'
import mobileImage2 from '../assets/images/mobile-image-hero-2.jpg'
import mobileImage3 from '../assets/images/mobile-image-hero-3.jpg'

const desktopImages = [desktopImage1, desktopImage2, desktopImage3]
const mobileImages = [mobileImage1, mobileImage2, mobileImage3]

function TopSection() {
  let visibleInd = 0
  let visibleData = mainData.filter(item => item.id === visibleInd)
  return (
    <section>
      {visibleData.map(item => {
        if (item.id === visibleInd) {
          return (
            <div className='section-description' key={item.id}>
              <h2>{item.heading}</h2>
              <p>{item.description}</p>
            </div>
          )
        }
      })}

      <div className='section-image'>
        <picture>
          <source
            srcSet={mobileImages[visibleInd]}
            media="(max-width:500px)"></source>
          <img src={desktopImages[visibleInd]} alt="" />
        </picture>
      </div>

    </section>
  )
}

export default TopSection
