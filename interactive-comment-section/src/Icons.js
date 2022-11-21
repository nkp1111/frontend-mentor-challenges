import React from 'react'
import ReplyIcon from './components/replybtn'
import EditIcon from './components/editbtn'
import DeleteIcon from './components/deletebtn'

function Icons({ username, replyId, commentId, text }) {

  return (
    username === 'juliusomo'
      ?
      <div className='icon-holder'>
        <DeleteIcon replyId={replyId} commentId={commentId} />
        <EditIcon replyId={replyId} text={text} />
      </div>
      :
      <div className='icon-holder'><ReplyIcon commentId={commentId} /></div>
  )
}

export default Icons

