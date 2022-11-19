import React from 'react'
import JuliImage from '../assets/images/avatars/image-juliusomo.png'

function sendText() {
  return (
    <article className='content justify-content-between'>
      <img src={JuliImage} alt='profile avatar' />
      <textarea placeholder='Add a comment...' />
      <button className='btns'>SEND</button>
    </article>
  )
}

export default sendText
