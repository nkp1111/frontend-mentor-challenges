import React from 'react'
import glassImageDesktop from '../../assets/images/desktop/image-stand-out.jpg'
import glassImageMobile from '../../assets/images/mobile/image-stand-out.jpg'

function GlassImage() {
  return (
    <div className='col-md-6'>
      <picture>
        <source
          srcSet={glassImageMobile}
          media="(max-width: 700px)"></source>
        <img src={glassImageDesktop} alt="glass"></img>
      </picture>
    </div>
  )
}

export default GlassImage
