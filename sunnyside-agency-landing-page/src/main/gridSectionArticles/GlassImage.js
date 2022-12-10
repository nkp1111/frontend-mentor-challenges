import React from 'react'
import glassImageDesktop from '../../assets/images/desktop/image-stand-out.jpg'
import glassImageMobile from '../../assets/images/mobile/image-stand-out.jpg'

function GlassImage() {
  return (
    <article className='col-md-6'>
      <h3 className='sr-only hidden-heading'>Glass Image</h3>
      <picture>
        <source
          srcSet={glassImageMobile}
          media="(max-width: 700px)"></source>
        <img src={glassImageDesktop} alt="glass"></img>
      </picture>
    </article>
  )
}

export default GlassImage
