import React from 'react'
import HeaderImgDekstop from '../assets/images/desktop/image-header.jpg'
import HeaderImgMobile from '../assets/images/mobile/image-header.jpg'

function FrontSection() {
  return (
    <section id="front-section">
      <h2 className='hidden-heading'>Front page</h2>
      <div className='arrow-down-image'></div>
      <picture className='header-image'>
        <source
          srcSet={HeaderImgMobile}
          media="(max-width: 700px)"></source>
        <img src={HeaderImgDekstop} alt="header front" />
      </picture>
    </section>
  )
}

export default FrontSection