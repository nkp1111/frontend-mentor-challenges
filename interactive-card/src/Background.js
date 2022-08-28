import React from 'react'

const Background = () => {
  return (
    <div className='front-style'>
      <div className='card-front'>
        <div className='info-holder'>
          <img src="https://raw.githubusercontent.com/nkp1111/interactive-card/7a02ad37e6559516056fe31e196217309cb6acdd/src/images/card-logo.svg" alt='colorful-background' id="logo" />
          <p>9591 6489 6389 101E</p>
          <div className="info">
            <span>FELICIA LEIRE</span><span>09/00</span>
          </div>
        </div>
      </div>
      <div className="card-back"></div>
    </div>
  )
}

export default Background
