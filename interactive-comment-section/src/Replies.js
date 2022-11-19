import React from 'react'
import CHeader from './CommentHeader';
import useGlobalContext from './context'

function Replies() {

  const { replyData } = useGlobalContext()
  console.log(replyData);
  return (
    replyData && replyData.map(reply => {
      return (
        <article key={reply.id}>
          <CHeader
            imgNum={reply.id - 1}
            username={reply.user.username}
            date={reply.createdAt} />
          <p>{reply.content}</p>
        </article>
      )
    })
  )
}

export default Replies
