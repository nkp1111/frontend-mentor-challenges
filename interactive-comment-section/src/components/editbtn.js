import React from 'react'
import EditIcon from '../assets/images/icon-edit.svg'
import useGlobalContext from '../context'


function Editbtn({ replyId, text }) {
  const { setAddReplyText, addReplyText } = useGlobalContext()
  return (
    <button className='icons'
      onClick={() => {
      }}>
      <img src={EditIcon} alt='' />
      Edit
    </button>
  )
}

export default Editbtn
