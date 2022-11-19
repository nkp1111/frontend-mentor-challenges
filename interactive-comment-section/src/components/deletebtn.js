import React from 'react'
import DeleteIcon from '../assets/images/icon-delete.svg'
import useGlobalContext from '../context'

function Deletebtn({ replyId }) {

  const { data, replyDataMapping } = useGlobalContext()

  return (
    <button className='icons'
      onClick={() => {
        replyDataMapping(data, replyId, "delete")
      }}>
      <img src={DeleteIcon} alt='' />
      Delete
    </button>
  )
}

export default Deletebtn
