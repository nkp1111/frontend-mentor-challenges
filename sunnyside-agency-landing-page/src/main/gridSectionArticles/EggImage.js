import React from 'react'
import EggImageDesktop from '../../assets/images/desktop/image-transform.jpg'
import EggImageMobile from '../../assets/images/mobile/image-transform.jpg'

function EggImage() {
  return (
    <div className='egg-image col-md-6'>
      <picture>
        <source
          srcSet={EggImageMobile}
          media="(max-width: 700px)"></source>
        <img src={EggImageDesktop} alt="egg" />
      </picture>
    </div>
  )
}

export default EggImage
