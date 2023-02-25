import React from 'react'
import { avatarImg, BsChevronLeft, SlOptionsVertical, chatData } from '../assets/data'
import AuthorInfo from './AuthorInfo'
import ChatView from './ChatView'
import SendMessageForm from './SendMessageForm'

function CardIllustration() {
  return (
    <article className='illustration-box card'>
      {/* card-head  */}
      <div className="card-head row">
        {/* author  */}
        <AuthorInfo avatarImg={avatarImg} />
        {/* back arrow  */}
        <div className="back-arrow col-2 order-1">
          <BsChevronLeft className='back-arrow-icon' />
        </div>
        {/* more options  */}
        <div className="options col-1 order-3">
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
