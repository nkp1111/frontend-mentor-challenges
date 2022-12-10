import React from 'react'
import photographyDesktop from '../../assets/images/desktop/image-photography.jpg'
import photographyMobile from '../../assets/images/mobile/image-photography.jpg'

function PhotoArticle() {
  return (
    <article className='col-md-6 tangerine-article'>
      <div className='article-img-content'>
        <h3>Photography</h3>
        <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
      </div>
      {/* tangerine image */}
      <picture>
        <source
          srcSet={photographyMobile}
          media="(max-width: 700px)"></source>
        <img src={photographyDesktop} alt="orange"></img>
      </picture>
    </article>
  )
}

export default PhotoArticle
