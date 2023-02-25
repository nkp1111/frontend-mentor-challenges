import React from 'react'
import { avatarImg, BsChevronLeft, SlOptionsVertical, chatData, FaChevronLeft } from '../assets/data'
import AuthorInfo from './AuthorInfo'
import ChatView from './ChatView'
import SendMessageForm from './SendMessageForm'

function CardIllustration() {
  return (
    <article className='illustration-box card'>
      {/* card-head  */}
      <div className="card-head d-flex align-items-center justify-content-start">
        {/* author  */}
        <AuthorInfo avatarImg={avatarImg} />
        {/* back arrow  */}
        <div className="back-arrow  order-1">
          <FaChevronLeft className='back-arrow-icon' />
        </div>
        {/* more options  */}
        <div className="options order-3 ms-auto">
          <SlOptionsVertical className='option-menu-icon' />
        </div>
      </div>

      {/* card body  */}
      <ChatView chatData={chatData} />

      {/* card footer  */}
      <SendMessageForm />

    </article>
  )
}

export default CardIllustration
