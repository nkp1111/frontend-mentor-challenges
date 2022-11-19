import React from 'react'
import useGlobalContext from './context'
import CHeader from './CommentHeader'
import Scoreboard from './components/scoreboard'


function Comment() {

  const { commentData } = useGlobalContext()

  return (
    commentData && commentData.map(comment => {
      return (
        <article key={comment.id} class="content">
          <div>
            <Scoreboard score={comment.score} />
          </div>
          <div>
            <CHeader
              imgNum={comment.id - 1}
              username={comment.user.username}
              date={comment.createdAt} />
            <p>
              {comment.content}
            </p>
          </div>

        </article>
      )
    })
  )
}

export default Comment
