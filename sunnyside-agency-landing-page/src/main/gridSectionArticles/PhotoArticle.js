import React from 'react'
import photographyDesktop from '../../assets/images/desktop/image-photography.jpg'
import photographyMobile from '../../assets/images/mobile/image-photography.jpg'

function PhotoArticle() {
  return (
    <div>
      <h3>Photography</h3>
      <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
      {/* tangerine image */}
      <picture>
        <source
          srcSet={photographyMobile}
          media="(max-width: 700px)"></source>
        <img src={photographyDesktop} alt="orange"></img>
      </picture>
    </div>
  )
}

export default PhotoArticle
