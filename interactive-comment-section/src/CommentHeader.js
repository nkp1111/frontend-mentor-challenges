import React from 'react'
import AmyImage from './assets/images/avatars/image-amyrobson.png'
import MaxImage from './assets/images/avatars/image-maxblagun.png'
import RamImage from './assets/images/avatars/image-ramsesmiron.png'
import JuliImage from './assets/images/avatars/image-juliusomo.png'
import ReplyIcon from './components/replybtn'
import EditIcon from './components/editbtn'
import DeleteIcon from './components/deletebtn'



const images = [AmyImage, MaxImage, RamImage, JuliImage]

function CommentHeader({ imgNum, username, date }) {

  return (
    <div>
      <img src={images[imgNum]} alt={username} />
      <span>{username}</span>
      <span>{date}</span>
      {username === 'juliusomo'
        ? <div>
          <DeleteIcon />
          <EditIcon />
        </div>
        : <ReplyIcon />}

    </div>
  )
}

export default CommentHeader
