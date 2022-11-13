import React from 'react'
import useGlobalContext from '../context'
import ImageThumb1 from '../assets/images/image-product-1-thumbnail.jpg'
import DeleteIcon from '../assets/images/icon-delete.svg'

function CartItems() {

  const { itemAdded, setItemAdded, showCart, setShowCart } = useGlobalContext()
  return (
    <div id="cart-items"
      className='py-4 d-flex flex-column rounded-4 px-3'>
      <p className='fw-bold my-0'>Cart</p>
      <hr />
      {itemAdded > 0
        ?
        <>
          <div
            className='d-flex align-items-center' id="quantity-info">
            <img src={ImageThumb1} alt="product preview" />
            <div
              className='d-flex flex-column justify-content-between'>
              <p>Fall Limited Edition Sneakers</p>
              <p>$125.00 x {itemAdded}
                <span className='fw-bold text-dark mx-2'> ${125 * itemAdded}</span></p>
            </div>
            <img src={DeleteIcon} alt="delete button"
              onClick={() => {
                setItemAdded(0)
              }}></img>
          </div>
          <button id="checkout-btn"
            className='mt-3'>Checkout</button>
        </>
        : <p className='text-center mt-5 fw-bold'>Your cart is empty.</p>}
    </div>
  )
}

export default CartItems
