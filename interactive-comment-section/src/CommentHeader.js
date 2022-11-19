import React from 'react'
import AmyImage from './assets/images/avatars/image-amyrobson.png'
import MaxImage from './assets/images/avatars/image-maxblagun.png'
import RamImage from './assets/images/avatars/image-ramsesmiron.png'
import JuliImage from './assets/images/avatars/image-juliusomo.png'

const images = [AmyImage, MaxImage, RamImage, JuliImage]

function CommentHeader({ imgNum, username, date, buttons }) {

  return (
    <div>
      <img src={images[imgNum]} alt={username} />
      <span>{username}</span>
      <span>{date}</span>
    </div>
  )
}

export default CommentHeader
