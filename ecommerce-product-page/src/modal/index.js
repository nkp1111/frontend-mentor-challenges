import React from 'react'
import CloseIcon from '../assets/images/icon-close.svg'
import ImageViewer from '../main/ImageViewer'
import PreviousIcon from '../assets/images/icon-previous.svg'
import NextIcon from '../assets/images/icon-next.svg'
import useGlobalContext from '../context'

function Modal() {

  const { handleModalChange, setShowModal } = useGlobalContext()

  return (
    <div id="modal"
      className='d-flex justify-content-center align-items-center flex-column'>
      <img src={CloseIcon} alt="close button"
        id="close-btn"
        onClick={() => setShowModal(false)} />
      <div id="modal-image-holder">
        <ImageViewer />
      </div>
      <div id="modal-btn"
        className='d-flex justify-content-between'>
        <img src={PreviousIcon} alt="right arrow"
          onClick={() => handleModalChange('prev')}></img>
        <img src={NextIcon} alt="left arrow"
          onClick={() => handleModalChange('next')}></img>
      </div>
    </div>
  )
}

export default Modal
