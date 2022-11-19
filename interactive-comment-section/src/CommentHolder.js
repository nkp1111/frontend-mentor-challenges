import React from 'react'
import Comment from './Comment'

function CommentHolder() {
  return (
    <main className='text-center'>
      <h1 className='d-none'>Interactive Comment Section</h1>
      <Comment />
    </main>
  )
}

export default CommentHolder
