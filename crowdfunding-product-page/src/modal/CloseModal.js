import React from 'react'
import { iconCheck } from '../assets/data'
import "./modal.css"

function CloseModal({ handleModal }) {
  return (
    <div className='close-modal'>
      <div className='checkmark-holder'>
        <img src={iconCheck} alt="checkmark icon"></img>
      </div>
      <p className='close-modal-head'>Thanks for your support!</p>
      <p>
        Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.
      </p>
      <button className='btn'
        onClick={() => handleModal()}>
        Got it!
      </button>
    </div>
  )
}

export default CloseModal
