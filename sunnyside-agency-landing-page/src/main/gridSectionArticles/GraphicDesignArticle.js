import React from 'react'
import graphicDesignDesktop from '../../assets/images/desktop/image-graphic-design.jpg'
import graphicDesignMobile from '../../assets/images/mobile/image-graphic-design.jpg'

function GraphicDesign() {
  return (
    <article>
      <h3>Graphic design</h3>
      <p> Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
      {/* cherry image */}
      <picture>
        <source
          srcSet={graphicDesignMobile}
          media="(max-width: 700px)"></source>
        <img src={graphicDesignDesktop} alt="cherry"></img>
      </picture>
    </article>
  )
}

export default GraphicDesign
