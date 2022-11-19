import React from 'react'
import useGlobalContext from './context'
import AmyImage from './assets/images/avatars/image-amyrobson.png'
import MaxImage from './assets/images/avatars/image-maxblagun.png'
import RamImage from './assets/images/avatars/image-ramsesmiron.png'
import JuliImage from './assets/images/avatars/image-juliusomo.png'

const images = [AmyImage, MaxImage, RamImage, JuliImage]

function Comment() {

  const { commentData } = useGlobalContext()

  return (
    commentData && commentData.map((comment, ind) => {
      return (
        <article key={ind}>
          <img src={images[comment.id - 1]} alt=""></img>
          <span>{comment.createdAt}</span>
          <p>
            {comment.content}
          </p>
        </article>
      )
    })
  )
}

export default Comment
export { images }