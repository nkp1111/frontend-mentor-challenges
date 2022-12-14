import React from 'react'
import { iconBookmark } from '../assets/data'

function frontPage() {
  return (
    <div className='front-page'>
      <h1 className='main-heading'>
        Mastercraft Bamboo Monitor Riser
      </h1>
      <p>
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className='btn-holder'>
        <button className='btn' >Back this project</button>
        <a href="#">
          <img src={iconBookmark} alt="bookmark icon"></img>
        </a>
      </div>
    </div>
  )
}

export default frontPage

