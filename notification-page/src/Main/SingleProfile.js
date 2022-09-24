import React from 'react'

function SingleProfile({ info }) {

  const { image, name, activity, interestShown, time, message, read } = info

  return (
    <div className={!read ? 'profile not-read' : 'profile'} >
      <div>
        <img src={image} alt={name + 'image'} />
      </div>
      <div>
        <span className='name'>{name}</span>
        <span className='activity'>{activity}</span>
        <span className={interestShown === 'Chess Club' ? 'sp interest' : 'interest'}>{interestShown}</span>
        {!read && <span>*</span>}<br />
        <span className='time'>{time}</span>
        {message && <div className='message-box'>{message}</div>}
      </div>
      {name === 'Kimberly Smith' && <div className='resp-img'>
        <img src='https://raw.githubusercontent.com/nkp1111/frontend-mentor-challenges/main/notification-page/public/assets/images/image-chess.webp' alt='girl'
        />
      </div>}
    </div>
  )
}

export default SingleProfile
