import React from 'react'

function SingleProfile({ info }) {

  const { image, name, activity, interestShown, time, message, read } = info

  return (
    <div>
      <img src={image} alt={name + 'image'} />
      <span>{name}</span>
      <span>{activity}</span>
      <span>{interestShown}{!read && <span>*</span>}</span>
      <br />
      <span>{time}</span>
      <div>{message}</div>

    </div>
  )
}

export default SingleProfile
