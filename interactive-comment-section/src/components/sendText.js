import React, { useEffect } from 'react'
import JuliImage from '../assets/images/avatars/image-juliusomo.png'
import useGlobalContext from '../context'

function SendText({ reply, commentId }) {

  const { data, text, setText, createReply, setAddReplyText } = useGlobalContext()

  useEffect(() => {
    if (reply) {
      setText(reply)
    }
  }, [])

  return (
    <article className='content justify-content-between' id="reply-send">
      <img src={JuliImage} alt='profile avatar' />
      <textarea
        placeholder={reply
          ? 'Add Reply Message...'
          : 'Add a comment...'}
        value={reply && text}
        onInput={(e) => {
          console.log(e.target.value);
          setText(e.target.value)
        }}
        autoFocus />
      <button className='btns'
        onClick={() => {
          if (text && commentId) {
            createReply(data, commentId, text)
            setAddReplyText(0)
          } else if (text && !commentId) {
            createReply(data, 'new', text)
            setAddReplyText(0)
          }
        }}>{reply ? 'REPLY' : 'SEND'}</button>
    </article>
  )
}

export default SendText
