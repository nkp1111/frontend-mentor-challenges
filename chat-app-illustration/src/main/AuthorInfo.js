import React from 'react'

function AuthorInfo({ avatarImg }) {
  return (
    <div className="author col-9 order-2">
      {/* author info */}
      <div className="author-info">
        <h2 className='name'>Samuel Green</h2>
        <p>Available to Walk</p>
      </div>
      {/* author image  */}
      <div className="author-img">
        <img src={avatarImg} alt="avatar" />
      </div>
    </div>
  )
}

export default AuthorInfo
