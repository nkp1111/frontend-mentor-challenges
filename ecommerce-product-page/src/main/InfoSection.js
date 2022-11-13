import React from 'react'

function InfoSection() {
  return (
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
  )
}

export default InfoSection
