import React from 'react'
import CloseIcon from '../assets/images/icon-close.svg'
import ImageViewer from '../main/ImageViewer'
import useGlobalContext from '../context'
import ModalBtn from './ModalBtn'

function Modal() {

  const { setShowModal } = useGlobalContext()

  return (
    <div id="modal"
      className='d-flex justify-content-center align-items-center flex-column'>
      <img src={CloseIcon} alt="close button"
        id="close-btn"
        onClick={() => setShowModal(false)} />
      <div id="modal-image-holder">
        <ImageViewer />
      </div>
      <ModalBtn />
    </div>
  )
}

export default Modal
