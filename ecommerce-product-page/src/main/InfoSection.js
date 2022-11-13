import React from 'react'
import MinusIcon from '../assets/images/icon-minus.svg'
import PlusIcon from '../assets/images/icon-plus.svg'
import CartIcon from '../assets/images/icon-cart-white.svg'
import useGlobalContext from '../context'

function InfoSection() {

  const { quantity, setQuantity, setItemAdded } = useGlobalContext()

  return (
    <section className='p-5 m-3' id="info-section">
      <h2>Sneaker Company</h2>
      <h3 className='mb-5 mt-3'>Fall Limited Edition Sneakers</h3>
      <p>
        These low-profile sneakers are your perfect casual wear companion. Featuring a
        durable rubber outer sole, they’ll withstand everything the weather can offer.
      </p>
      <div id="price-info">
        <p>$125.00 <span className='mx-2 py-1 px-2'>50%</span></p>
        <p>$250.00</p>
      </div>
      <div id="shop-cart"
        className='d-flex 
      w-100 
      justify-content-between 
      mt-5 
      align-items-center'>
        <div
          onClick={() => {
            quantity > 0 && setQuantity(quantity - 1)
          }}>
          <img src={MinusIcon} alt="minus icon" />
        </div>
        <div className='fw-bold'>
          {quantity}
        </div>
        <div
          onClick={() => {
            setQuantity(quantity + 1)
          }}>
          <img src={PlusIcon} alt="plus icon" />
        </div>
        <button className='fw-bold'
          onClick={() => {
            setItemAdded(quantity)
          }}>
          <img src={CartIcon} alt="cart icon" className='mx-3' />
          Add to cart</button>
      </div>
    </section>
  )
}

export default InfoSection
