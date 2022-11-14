import React from 'react'
import useGlobalContext from '../context'

import Image1 from '../assets/images/image-product-1.jpg'
import Image2 from '../assets/images/image-product-2.jpg'
import Image3 from '../assets/images/image-product-3.jpg'
import Image4 from '../assets/images/image-product-4.jpg'
import ImageThumb1 from '../assets/images/image-product-1-thumbnail.jpg'
import ImageThumb2 from '../assets/images/image-product-2-thumbnail.jpg'
import ImageThumb3 from '../assets/images/image-product-3-thumbnail.jpg'
import ImageThumb4 from '../assets/images/image-product-4-thumbnail.jpg'
import ModalBtn from '../modal/ModalBtn'


const images = [Image1, Image2, Image3, Image4]
const thumbnails = [ImageThumb1, ImageThumb2, ImageThumb3, ImageThumb4]

function ImageViewer() {

  const { activeImg, setActiveImg, setShowModal, media } = useGlobalContext()
  return (
    <>
      <div className='mb-4' id="main-img-holder">
        <img
          src={images[activeImg]}
          alt="product full view"
          className={media ? 'rounded-0 h-100 w-100' : 'w-100 rounded-4'}
          onClick={() => setShowModal(true)}
        />
      </div>
      {media
        ? <ModalBtn />
        :
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
      }
    </>
  )
}

export { images, thumbnails }

export default ImageViewer
