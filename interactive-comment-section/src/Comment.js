import React from 'react'
import useGlobalContext from './context'
import CHeader from './CommentHeader'


function Comment() {

  const { commentData } = useGlobalContext()

  return (
    commentData && commentData.map(comment => {
      return (
        <article key={comment.id}>
          <CHeader
            imgNum={comment.id - 1}
            username={comment.user.username}
            date={comment.createdAt} />
          <p>
            {comment.content}
          </p>
        </article>
      )
    })
  )
}

export default Comment
