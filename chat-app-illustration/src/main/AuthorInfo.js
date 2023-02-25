import React from 'react'

function AuthorInfo({ avatarImg }) {
  return (
    <div className="author order-2 d-flex align-items-center">
      {/* author info */}
      <div className="author-info order-2">
        <h2 className='name'>Samuel Green</h2>
        <p>Available to Walk</p>
      </div>
      {/* author image  */}
      <div className="author-img order-1">
        <img src={avatarImg} alt="avatar" />
      </div>
    </div>
  )
}

export default AuthorInfo
