import React from 'react'
import Image1 from '../assets/images/image-product-1.jpg'
import Image2 from '../assets/images/image-product-2.jpg'
import Image3 from '../assets/images/image-product-3.jpg'
import Image4 from '../assets/images/image-product-4.jpg'
import ImageThumb1 from '../assets/images/image-product-1-thumbnail.jpg'
import ImageThumb2 from '../assets/images/image-product-2-thumbnail.jpg'
import ImageThumb3 from '../assets/images/image-product-3-thumbnail.jpg'
import ImageThumb4 from '../assets/images/image-product-4-thumbnail.jpg'


function index() {
  return (
    <main className='w-100 d-flex'>
      {/* To hide heading to match the page as close to design */}
      <h1 className='opacity-0 d-none'>E-commerce products</h1>
      <section>
        <h2 className='opacity-0 d-none'>Product image</h2>
        <div>
          <img src={Image1} alt="product full view" />
        </div>
        <div id='thumbnail-holder' className='d-flex w-100 justify-content-between'>
          <div><img src={ImageThumb1} alt="product preview" /></div>
          <div><img src={ImageThumb2} alt="product preview" /></div>
          <div><img src={ImageThumb3} alt="product preview" /></div>
          <div><img src={ImageThumb4} alt="product preview" /></div>
        </div>
      </section>
      <section className='p-3'>
        <h2>Sneaker Company</h2>
        <h3>Fall Limited Edition Sneakers</h3>
        <p>
          These low-profile sneakers are your perfect casual wear companion. Featuring a
          durable rubber outer sole, they’ll withstand everything the weather can offer.
        </p>
        <div id="price-info">
          <p> $125.00 <span> 50%</span></p>
          <p>$250.00</p>
        </div>
        <div id="shop-cart">
          <div>
            <img src="" alt="" />
          </div>
          <div>0</div>
          <div>
            <img src="" alt="" />
          </div>
          <button>Add to cart</button>
        </div>
      </section>
    </main>
  )
}

export default index
