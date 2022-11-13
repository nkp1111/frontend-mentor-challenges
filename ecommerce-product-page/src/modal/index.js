import React from 'react'
import CloseIcon from '../assets/images/icon-close.svg'
import ImageViewer from '../main/ImageViewer'

function Modal() {

  return (
    <div id="modal"
      className='d-flex justify-content-center align-items-center'>
      <img src={CloseIcon} alt="close button"
        id="close-btn" />
      <div id="modal-image-holder">
        <ImageViewer />
      </div>
    </div>
  )
}

export default Modal
