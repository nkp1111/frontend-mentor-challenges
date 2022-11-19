import React, { useEffect } from 'react'
import JuliImage from '../assets/images/avatars/image-juliusomo.png'
import useGlobalContext from '../context'

function SendText({ reply }) {

  const { text, setText } = useGlobalContext()

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
      <button className='btns'>{reply ? 'REPLY' : 'SEND'}</button>
    </article>
  )
}

export default SendText
