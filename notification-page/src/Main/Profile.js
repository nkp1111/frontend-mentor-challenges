import React from 'react'
import { data } from '../data'
import SingleProfile from './SingleProfile'


function Profile() {

  return (
    <>
      <div className='d-flex'>
        <h2>
          Notifications <span><sup>3</sup></span>
        </h2>
        <p>Mark all as read
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
