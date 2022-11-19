import React from 'react'
import CHeader from './CommentHeader';
import useGlobalContext from './context'
import Scoreboard from './components/scoreboard'

function Replies() {

  const { replyData } = useGlobalContext()
  console.log(replyData);
  return (
    replyData && replyData.map(reply => {
      return (
        <article key={reply.id} className="content replies">
          <div>
            <Scoreboard score={reply.score} />
          </div>
          <div>
            <CHeader
              imgNum={reply.id - 1}
              username={reply.user.username}
              date={reply.createdAt} />
            <p>
              <span
                style={{ color: '#5457b6', fontWeight: '500' }}>
                {'@' + reply.replyingTo + ' '}
              </span>
              {reply.content}
            </p>
          </div>
        </article>
      )
    })
  )
}

export default Replies
