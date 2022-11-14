import React from 'react'
import PreviousIcon from '../assets/images/icon-previous.svg'
import NextIcon from '../assets/images/icon-next.svg'
import useGlobalContext from '../context'


function ModalBtn() {
  const { handleModalChange } = useGlobalContext()

  return (
    <div id="modal-btn"
      className='d-flex justify-content-between'>
      <img src={PreviousIcon} alt="right arrow"
        onClick={() => handleModalChange('prev')}></img>
      <img src={NextIcon} alt="left arrow"
        onClick={() => handleModalChange('next')}></img>
    </div>
  )
}

export default ModalBtn
