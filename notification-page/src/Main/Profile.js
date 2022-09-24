import React from 'react'
import { data } from '../data'


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
      {data.map(d => {
        return d.name
      })}
    </>
  )
}

export default Profile
