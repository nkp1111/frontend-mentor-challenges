import React from 'react'

function CardIllustration() {
  return (
    <article className='illustration-box card'>
      {/* card-head  */}
      <div className="card-head row">
        {/* author  */}
        <div className="author col-9 order-2">
          {/* author info */}
          <div className="author-info">
            <h2 className='name'>Samuel Green</h2>
            <p>Available to Walk</p>
          </div>
          {/* author image  */}
          <div className="author-img">
            <img src="" alt="" />
          </div>
        </div>

        {/* back arrow  */}
        <div className="back-arrow col-2 order-1">
          <img src="" alt="" />
        </div>

        {/* more options  */}
        <div className="options col-1 order-3">
          <img src="" alt="" />
        </div>
      </div>

      {/* card body  */}
      <div className="card-body">

      </div>

    </article>
  )
}

export default CardIllustration
