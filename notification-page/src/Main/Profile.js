import React from 'react'
import { data } from '../data'
import SingleProfile from './SingleProfile'


function Profile() {

  return (
    <>
      <div className='d-flex justify-content-between'>
        <h2 id='notification'>
          Notifications
          <span> 3</span>
        </h2>
        <p>
          Mark all as read
        </p>
      </div>
      {data.map(info => {
        return <SingleProfile info={info}
          key={info.id} />
      })}
    </>
  )
}

export default Profile
