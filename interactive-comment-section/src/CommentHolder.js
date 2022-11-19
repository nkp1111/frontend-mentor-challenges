import React from 'react'
import Comment from './Comment'
import Replies from './Replies'

function CommentHolder() {
  return (
    <main className='text-center'>
      <h1 className='d-none'>Interactive Comment Section</h1>
      <Comment />
      <Replies />
    </main>
  )
}

export default CommentHolder
