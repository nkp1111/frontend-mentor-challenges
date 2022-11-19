import React from 'react'
import JuliImage from '../assets/images/avatars/image-juliusomo.png'

function sendText({ reply }) {
  return (
    <article className='content justify-content-between' id="reply-send">
      <img src={JuliImage} alt='profile avatar' />
      <textarea
        placeholder={reply
          ? 'Add Reply Message...'
          : 'Add a comment...'}
        value={reply} />
      <button className='btns'>{reply ? 'REPLY' : 'SEND'}</button>
    </article>
  )
}

export default sendText
