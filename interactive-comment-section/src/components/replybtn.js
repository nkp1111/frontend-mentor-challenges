import React from 'react'
import ReplyIcon from '../assets/images/icon-reply.svg'
import useGlobalContext from '../context'

function Replybtn({ commentId }) {

  const { setAddReplyText, addReplyText } = useGlobalContext()
  return (
    <button className='icons'
      onClick={() => {
        if (addReplyText) {
          setAddReplyText(0)
        } else {
          setAddReplyText(commentId)
        }
      }}>
      <img src={ReplyIcon} alt='' />
      Reply
    </button>
  )
}

export default Replybtn
