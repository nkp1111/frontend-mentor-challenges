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

  const handleClick = (item, count) => {
    if (item === '') {
      setCount(0)
      setInfos(infos.map(info => {
        info.read = true
        return info
      }))
    }
    if (item) {
      setCount(count - 1)
      setInfos(infos.map(info => {
        if (info.name === item) {
          info.read = true
        }
        return info
      }))
    }
  }

  return (
    <>
      <div className='d-flex justify-content-between
      px-3'>
        <h2 id='notification'>
          Notifications
          <span>{count}</span>
        </h2>
        <p onClick={() => handleClick('', count)}>
          Mark all as read
        </p>
      </div>
      {infos.map(info => {
        return <SingleProfile info={info}
          key={info.id}
          handleClick={handleClick}
          count={count} />
      })}
    </>
  )
}

export default Profile
