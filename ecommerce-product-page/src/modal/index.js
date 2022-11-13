import React from 'react'
import CloseIcon from '../assets/images/icon-close.svg'

function index() {
  return (
    <div id="modal"
      className='d-flex justify-content-center align-items-center'>
      <img src={CloseIcon} alt="close button"
        id="close-btn" />
      <div id="modal-image-holder">
        <div>
          <img src="" alt="main product image"></img>
        </div>
      </div>
    </div>
  )
}

export default index
