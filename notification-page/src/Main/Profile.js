import React, { useState } from 'react'
import { data } from '../data'
import SingleProfile from './SingleProfile'


function Profile() {

  let notificationCount = data.reduce((acc, cur) => {
    if (!cur.read) {
      acc++
    }
    return acc
  }, 0)

  const [count, setCount] = useState(notificationCount)

  const [infos, setInfos] = useState(data)

  const handleClick = () => {
    setCount(0)
    setInfos(infos.map(info => {
      info.read = true
      return info
    }))
  }

  return (
    <>
      <div className='d-flex justify-content-between
      px-3'>
        <h2 id='notification'>
          Notifications
          <span>{count}</span>
        </h2>
        <p onClick={handleClick}>
          Mark all as read
        </p>
      </div>
      {infos.map(info => {
        return <SingleProfile info={info}
          key={info.id} />
      })}
    </>
  )
}

export default Profile
