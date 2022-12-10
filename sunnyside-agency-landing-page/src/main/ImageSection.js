import React from 'react'
import milkbottlesImageDesktop from '../assets/images/desktop/image-gallery-milkbottles.jpg'
import milkbottlesImageMobile from '../assets/images/mobile/image-gallery-milkbottles.jpg'
import orangeImageDesktop from '../assets/images/desktop/image-gallery-orange.jpg'
import orangeImageMobile from '../assets/images/mobile/image-gallery-orange.jpg'
import coneImageDesktop from '../assets/images/desktop/image-gallery-cone.jpg'
import coneImageMobile from '../assets/images/mobile/image-gallery-cone.jpg'
import sugarcubesImageDesktop from '../assets/images/desktop/image-gallery-sugarcubes.jpg'
import sugarcubesImageMobile from '../assets/images/mobile/image-gallery-sugarcubes.jpg'

function ImageSection() {
  return (
    <section id="image-section">
      <h2 className='hidden-heading'>Image Section</h2>
      <div className='row'>
        <picture className='col-3'>
          <source
            srcSet={milkbottlesImageMobile}
            media="(max-width: 700px)"></source>
          <img src={milkbottlesImageDesktop} alt="orange"></img>
        </picture>
        <picture className='col-3'>
          <source
            srcSet={orangeImageMobile}
            media="(max-width: 700px)"></source>
          <img src={orangeImageDesktop} alt="orange"></img>
        </picture>
        <picture className='col-3'>
          <source
            srcSet={coneImageMobile}
            media="(max-width: 700px)"></source>
          <img src={coneImageDesktop} alt="orange"></img>
        </picture>
        <picture className='col-3'>
          <source
            srcSet={sugarcubesImageMobile}
            media="(max-width: 700px)"></source>
          <img src={sugarcubesImageDesktop} alt="orange"></img>
        </picture>
      </div>
    </section>
  )
}

export default ImageSection
