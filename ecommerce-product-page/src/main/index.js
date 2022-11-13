import React from 'react'
import ImageSection from './ImageSection'
import InfoSection from './InfoSection'
import useGlobalContext from '../context'

function Index() {

  const { media } = useGlobalContext()
  return (
    <main className={media
      ? 'w-100 d-flex m-0 justify-content-between flex-column align-items-start'
      : 'w-100 d-flex m-0 justify-content-center'}>
      {/* To hide heading to match the page as close to design */}
      < h1 className='opacity-0 d-none' > E - commerce products</h1 >
      <ImageSection />
      <InfoSection />
    </main >
  )
}

export default Index
