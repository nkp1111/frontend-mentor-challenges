import React from 'react'
import { iconQuotes, avatar } from '../assets/data'

function SectionTwoArticle() {
  return (
    <div className='card'>
      <div className='quote-icon'>
        <img src={iconQuotes} alt="" />
      </div>
      <p>
        Fylo has improved our team productivity by an order of magnitude. Since
        making the switch our team has become a well-oiled collaboration machine.
      </p>
      <div className="profile d-flex">
        <img src={avatar} alt="avatar" />
        <div className="info">
          <h3>Kyle Burton</h3>
          <p>Founder & CEO, Huddle</p>
        </div>
      </div>
    </div>
  )
}

export default SectionTwoArticle
