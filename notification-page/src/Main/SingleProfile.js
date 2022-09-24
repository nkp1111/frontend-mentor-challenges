import React from 'react'

function SingleProfile({ info }) {

  const { image, name, activity, interestShown, time, message, read } = info

  return (
    <div className={!read ? 'profile not-read' : 'profile'} >
      <img src={image} alt={name + 'image'} />
      <span className='name'>{name}</span>
      <span className='activity'>{activity}</span>
      <span className='interest'>{interestShown}</span>

      {!read && <span>*</span>}<br />
      <span className='time'>{time}</span>
      <div className='message-box'>{message}</div>
    </div>
  )
}

export default SingleProfile
