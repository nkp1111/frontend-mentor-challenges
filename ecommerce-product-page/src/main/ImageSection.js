import React from 'react'
import Image1 from '../assets/images/image-product-1.jpg'
import Image2 from '../assets/images/image-product-2.jpg'
import Image3 from '../assets/images/image-product-3.jpg'
import Image4 from '../assets/images/image-product-4.jpg'
import ImageThumb1 from '../assets/images/image-product-1-thumbnail.jpg'
import ImageThumb2 from '../assets/images/image-product-2-thumbnail.jpg'
import ImageThumb3 from '../assets/images/image-product-3-thumbnail.jpg'
import ImageThumb4 from '../assets/images/image-product-4-thumbnail.jpg'

function ImageSection() {
  return (
    <section className='m-3 px-3'>
      <h2 className='opacity-0 d-none'>Product image</h2>
      <div className='mb-4' id="main-img-holder">
        <img src={Image1} alt="product full view" className='w-100 rounded-4' />
      </div>
      <div id='thumbnail-holder' className='d-flex w-100 justify-content-between'>
        <div><img src={ImageThumb1} alt="product preview" /></div>
        <div><img src={ImageThumb2} alt="product preview" /></div>
        <div><img src={ImageThumb3} alt="product preview" /></div>
        <div><img src={ImageThumb4} alt="product preview" /></div>
      </div>
    </section>
  )
}

export default ImageSection
