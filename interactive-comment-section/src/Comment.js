import React from 'react'
import useGlobalContext from './context'
import CHeader from './CommentHeader'
import Scoreboard from './components/scoreboard'
import Replies from './Replies'
import SendText from './components/sendText'


function Comment() {

  const { commentData, replyMap, addReplyText } = useGlobalContext()

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
                date={comment.createdAt}
                commentId={comment.id} />
              <p>
                {comment.content}
              </p>
            </div>
          </article>

          {replyMap[comment.id] &&
            <Replies replyMap={replyMap[comment.id]} />}

          {addReplyText === comment.id && <SendText reply={'@' + comment.user.username + ' '} />}
        </>
      )
    })
  )
}

export default Comment
