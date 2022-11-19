import React from 'react'
import useGlobalContext from './context'
import CHeader from './CommentHeader'
import Scoreboard from './components/scoreboard'
import Replies from './Replies'


function Comment() {

  const { commentData, replyMap } = useGlobalContext()

  return (
    commentData && commentData.map(comment => {
      return (
        <>
          <article key={comment.id} className="content">
            <div>
              <Scoreboard id={comment.id} />
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

          {replyMap[comment.id] &&
            <Replies replyMap={replyMap[comment.id]} />}
        </>
      )
    })
  )
}

export default Comment
