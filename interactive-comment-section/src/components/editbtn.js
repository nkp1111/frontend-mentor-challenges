import React from 'react'
import EditIcon from '../assets/images/icon-edit.svg'
import useGlobalContext from '../context'


function Editbtn({ replyId, text }) {
  const { setAddReplyText, addReplyText, setEdit, setText } = useGlobalContext()
  return (
    <button className='icons'
      onClick={() => {
        setEdit(replyId)
        setText(text)
      }}>
      <img src={EditIcon} alt='' />
      Edit
    </button>
  )
}

export default Editbtn
