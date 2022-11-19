import React from 'react'
import Comment from './Comment'
import Replies from './Replies'
import SendText from './components/sendText'

function CommentHolder() {
  return (
    <main className='m-auto p-3'>
      <h1 className='d-none text-center'>Interactive Comment Section</h1>
      <Comment />
      {/* <Replies /> */}
      <SendText />
    </main>
  )
}

export default CommentHolder
