import React from 'react'
import Image1 from '../assets/images/image-product-1.jpg'
import Image2 from '../assets/images/image-product-2.jpg'
import Image3 from '../assets/images/image-product-3.jpg'
import Image4 from '../assets/images/image-product-4.jpg'
import ImageThumb1 from '../assets/images/image-product-1-thumbnail.jpg'
import ImageThumb2 from '../assets/images/image-product-2-thumbnail.jpg'
import ImageThumb3 from '../assets/images/image-product-3-thumbnail.jpg'
import ImageThumb4 from '../assets/images/image-product-4-thumbnail.jpg'
import useGlobalContext from '../context'
import Modal from '../modal'

const images = [Image1, Image2, Image3, Image4]
const thumbnails = [ImageThumb1, ImageThumb2, ImageThumb3, ImageThumb4]

function ImageSection() {

  const { activeImg, setActiveImg, showModal, setShowModal } = useGlobalContext()

  return (
    <section className='m-3 px-3'>
      <h2 className='opacity-0 d-none'>Product image</h2>
      <div className='mb-4' id="main-img-holder">
        <img
          src={images[activeImg]}
          alt="product full view"
          className='w-100 rounded-4'
          onClick={() => setShowModal(true)}
        />
      </div>
      <div id='thumbnail-holder' className='d-flex w-100 justify-content-between'>
        {thumbnails.map((thumbnail, ind) => {
          return (
            <div key={ind}
              className={ind === activeImg ? 'active' : ''}
              onClick={() => {
                setActiveImg(ind)
              }}>
              <img src={thumbnail} alt="product preview" />
            </div>
          )
        })}
      </div>
      {showModal && <Modal />}
    </section>
  )
}

export default ImageSection
