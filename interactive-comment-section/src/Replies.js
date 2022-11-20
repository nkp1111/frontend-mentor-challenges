import React from 'react'
import CHeader from './CommentHeader';
import useGlobalContext from './context'
import Scoreboard from './components/scoreboard'

function Replies({ replyMap }) {

  const { replyData } = useGlobalContext()

  return (
    replyData && replyMap && replyData.map(reply => {
      let imageNum = reply.id > 3 ? 3 : reply.id - 1
      if (replyMap.includes(reply.id)) {
        return (
          <article key={reply.id} className="content replies">
            <div>
              <Scoreboard id={imageNum} />
            </div>
            <div>
              <CHeader
                imgNum={imageNum}
                username={reply.user.username}
                date={reply.createdAt}
                replyId={reply.id} />
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
      }

    })
  )
}

export default Replies
