import React from 'react'
import DeleteIcon from '../assets/images/icon-delete.svg'
import useGlobalContext from '../context'

function Deletebtn({ replyId, commentId }) {

  const { setDeleteModal, setModifyId } = useGlobalContext()

  return (
    <button className='icons'
      onClick={() => {
        setDeleteModal(true)
        setModifyId(replyId)
        if (commentId) {
          setModifyId(commentId)
        }
      }}>
      <img src={DeleteIcon} alt='' />
      Delete
    </button>
  )
}

export default Deletebtn
