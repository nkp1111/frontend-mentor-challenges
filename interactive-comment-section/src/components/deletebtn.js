import React from 'react'
import DeleteIcon from '../assets/images/icon-delete.svg'

function Editbtn() {
  return (
    <button className='icons'>
      <img src={DeleteIcon} alt='' />
      Delete
    </button>
  )
}

export default Editbtn
