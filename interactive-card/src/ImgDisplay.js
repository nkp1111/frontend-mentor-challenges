import React from 'react'

function ImgDisplay() {

  const backgroundFront = 'https://github.com/nkp1111/frontend-mentor-challenges/blob/main/interactive-card/public/images/bg-card-front.png?raw=true'
  const backgroundBack = 'https://github.com/nkp1111/frontend-mentor-challenges/blob/main/interactive-card/public/images/bg-card-back.png?raw=true'

  return (
    <div className='display
    h-100'>
      <div style={{ backgroundImage: `url(${backgroundFront})` }} className='card front'>
        <img
          src='https://raw.githubusercontent.com/nkp1111/frontend-mentor-challenges/2f74a85809cbfbe3d7041d8ee0c6f68f95001abd/interactive-card/public/images/card-logo.svg'
          alt='card-logo'
          width='80'
          height='50'
        />
        <p className='mt-4 mb-1'>0000 0000 0000 0000</p>
        <div className='d-flex justify-content-between'>
          <p>Jane Appleseed</p>
          <p>00/00</p>
        </div>



      </div>
      <div style={{ backgroundImage: `url(${backgroundBack})` }} className='card back'></div>
    </div>
  )
}

export default ImgDisplay
