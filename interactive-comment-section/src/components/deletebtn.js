import React from 'react'
import DeleteIcon from '../assets/images/icon-delete.svg'

function Deletebtn({ replyId }) {

  return (
    <button className='icons'>
      <img src={DeleteIcon} alt='' />
      Delete
    </button>
  )
}

export default Deletebtn
