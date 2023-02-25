import React from 'react'

function AuthorInfo({ avatarImg }) {
  return (
    <div className="author col-9 order-2 row">
      {/* author info */}
      <div className="author-info col-9 order-2">
        <h2 className='name'>Samuel Green</h2>
        <p>Available to Walk</p>
      </div>
      {/* author image  */}
      <div className="author-img col-3 order-1">
        <img src={avatarImg} alt="avatar" />
      </div>
    </div>
  )
}

export default AuthorInfo
