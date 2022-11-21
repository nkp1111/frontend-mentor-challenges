import React from 'react'
import AmyImage from './assets/images/avatars/image-amyrobson.png'
import MaxImage from './assets/images/avatars/image-maxblagun.png'
import RamImage from './assets/images/avatars/image-ramsesmiron.png'
import JuliImage from './assets/images/avatars/image-juliusomo.png'

import useGlobalContext from './context'
import Icons from './Icons'

const images = [AmyImage, MaxImage, RamImage, JuliImage]

function CommentHeader({ imgNum, username, date, replyId, commentId, text }) {

  const { media } = useGlobalContext()

  return (
    <div className='d-flex align-items-center justify-content-between' id='comment-header'>
      <img src={images[imgNum]} alt={username} />
      <span className='fw-bold'>{username}</span>
      {username === 'juliusomo' && <span id="me">you</span>}
      <span>{date}</span>
      {!media &&
        <Icons
          username={username}
          replyId={replyId}
          commentId={commentId}
          text={text} />}

    </div>
  )
}

export default CommentHeader
