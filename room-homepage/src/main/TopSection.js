import React, { useState } from 'react'
import { mainData } from '../assets/data'
import desktopImage1 from '../assets/images/desktop-image-hero-1.jpg'
import desktopImage2 from '../assets/images/desktop-image-hero-2.jpg'
import desktopImage3 from '../assets/images/desktop-image-hero-3.jpg'
import mobileImage1 from '../assets/images/mobile-image-hero-1.jpg'
import mobileImage2 from '../assets/images/mobile-image-hero-2.jpg'
import mobileImage3 from '../assets/images/mobile-image-hero-3.jpg'
import ButtonHolder from './ButtonHolder'
import ArrowIcon from '../assets/images/icon-arrow.svg'

const desktopImages = [desktopImage1, desktopImage2, desktopImage3]
const mobileImages = [mobileImage1, mobileImage2, mobileImage3]

function TopSection() {
  const [visibleInd, setVisibleInd] = useState(0)
  let visibleData = mainData.filter(item => item.id === visibleInd)
  return (
    <section className='top-section row'>
      {visibleData.map(item => {
        if (item.id === visibleInd) {
          return (
            <div key={item.id}
              className='section-description col-md-5 order-2'>
              <h2 className='section-heading'>{item.heading}</h2>
              <p className='section-text'>{item.description}</p>
              <span className='order-btn' role="button">
                Shop now
                <img src={ArrowIcon} alt="arrow icon" />
              </span>
            </div>
          )
        }
      })}
      <ButtonHolder setVisibleInd={setVisibleInd} />
      <div className='section-image col-md-7 order-1'>
        <picture>
          <source
            srcSet={mobileImages[visibleInd]}
            media="(max-width:500px)"></source>
          <img src={desktopImages[visibleInd]} alt="hero items" />
        </picture>
      </div>

    </section>
  )
}

export default TopSection
