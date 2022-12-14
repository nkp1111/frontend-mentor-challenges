import React from 'react'
import CHeader from './CommentHeader';
import useGlobalContext from './context'
import Scoreboard from './components/scoreboard'
import SendText from './components/sendText'
import Icons from './Icons'


function Replies({ replyMap, commentId }) {

  const { replyData, edit, media } = useGlobalContext()

  return (
    replyData && replyMap && replyData.map(reply => {
      let imageNum = reply.id > 3 ? 3 : reply.id - 1
      if (replyMap.includes(reply.id)) {
        if (edit === reply.id) {
          return <SendText reply='>' replyId={reply.id} />
        } else {
          return (
            <article key={reply.id} className="content replies">
              <div>
                <Scoreboard id={reply.id} />
                {media && <Icons
                  username={reply.user.username}
                  replyId={reply.id}
                  text={reply.content}
                  commentId={commentId}
                  date={reply.createdAt}
                />}
              </div>
              <div>
                <CHeader
                  imgNum={imageNum}
                  username={reply.user.username}
                  date={reply.createdAt}
                  replyId={reply.id}
                  text={reply.content} />
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
      }

    })
  )
}

export default Replies
