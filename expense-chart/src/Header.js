import React from 'react'
import { json } from 'd3'

function Header() {
  // const url = 'https://raw.githubusercontent.com/nkp1111/frontend-mentor-challenges/main/expense-chart/data.json'

  // json(url).then(data => console.log(data))

  return (
    <div class='header'>
      <div class='header-info'>
        <p>My balance</p>
        <p> $921.48</p>
      </div>
      <div class='logo'>
        <img src='https://raw.githubusercontent.com/nkp1111/frontend-mentor-challenges/eed1fa3a1b8951016186c247eb41dce35c733781/expense-chart/images/logo.svg' alt='logo' />
      </div>
    </div>
  )
}

export default Header
