import React from 'react'
import useGlobalContext from './context'
import CHeader from './CommentHeader'


function Comment() {

  const { commentData } = useGlobalContext()

  return (
    commentData && commentData.map((comment, ind) => {
      return (
        <article key={ind}>
          <CHeader
            imgNum={comment.id - 1}
            username={comment.user.username}
            date={comment.createdAt}
            buttons={'nothing'} />
          <p>
            {comment.content}
          </p>
        </article>
      )
    })
  )
}

export default Comment
