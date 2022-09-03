import React from 'react'

function Header() {

  return (
    <header className='header'>
      <div className='header-info'>
        <p>My balance</p>
        <p> $921.48</p>
      </div>
      <div className='logo'>
        <img src='https://raw.githubusercontent.com/nkp1111/frontend-mentor-challenges/eed1fa3a1b8951016186c247eb41dce35c733781/expense-chart/images/logo.svg' alt='logo' />
      </div>
    </header>
  )
}

export default Header
