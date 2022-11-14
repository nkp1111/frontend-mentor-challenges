import React from 'react'
import useGlobalContext from '../context'
import Modal from '../modal'
import ImageViewer from './ImageViewer'


function ImageSection() {

  const { showModal, media } = useGlobalContext()

  return (
    <section className={media ? 'm-0 px-0' : 'm-3 px-3'}>
      <h2 className='opacity-0 d-none'>Product image</h2>
      <ImageViewer />
      {showModal && !media && <Modal />}
    </section>
  )
}

export default ImageSection
