import React from 'react'
import AmyImage from './assets/images/avatars/image-amyrobson.png'
import MaxImage from './assets/images/avatars/image-maxblagun.png'
import RamImage from './assets/images/avatars/image-ramsesmiron.png'
import JuliImage from './assets/images/avatars/image-juliusomo.png'
import ReplyIcon from './components/replybtn'
import EditIcon from './components/editbtn'
import DeleteIcon from './components/deletebtn'

const images = [AmyImage, MaxImage, RamImage, JuliImage]

function CommentHeader({ imgNum, username, date, replyId, commentId, deleteModal, setDeleteModal, }) {
  console.log(imgNum)
  return (
    <div className='d-flex align-items-center justify-content-between' id='comment-header'>
      <img src={images[imgNum]} alt={username} />
      <span className='fw-bold'>{username}</span>
      {username === 'juliusomo' && <span id="me">you</span>}
      <span>{date}</span>
      {username === 'juliusomo'
        ?
        <div>
          <DeleteIcon replyId={replyId} />
          <EditIcon />
        </div>
        :
        <div><ReplyIcon commentId={commentId} /></div>
      }

    </div>
  )
}

export default CommentHeader
