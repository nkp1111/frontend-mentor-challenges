import React from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import Dropdown from '../Dropdown/index'

function Header() {

  const [dropdown, setDropdown] = React.useState(false)

  const [dropdownName, setDropdownName] = React.useState('')

  // const [position, setPosition] = React.useState([0, 0])

  const handleDropdown = (e) => {
    setDropdown(true)
    // const margin = 40
    // const position = [e.clientX - margin, e.clientY + margin]
    // setPosition(position)
    setDropdownName(e.target.id)
  }

  return (
    <header className="App-header
    d-flex
    justify-content-start
    align-items-center
    ">
      <div>
        <img src='https://raw.githubusercontent.com/nkp1111/frontend-mentor-challenges/b4dcf216922bb6f28428d89fd83e06d19a16bc04/dropdown-menu/public/images/logo.svg' className="App-logo" alt="logo" />
      </div>
      <nav>
        <ul
          className='d-flex
        justify-space-between
        align-items-center
        mt-2
        '>
          <li id='feature'
            onMouseOver={(e) => handleDropdown(e)}
            onMouseOut={() => setDropdown(false)}
          >Features <BsChevronDown />
          </li>
          <li id='company'
            onMouseOver={(e) => handleDropdown(e)}
            onMouseOut={() => setDropdown(false)}>Company <BsChevronUp /></li>
          <li>Careers</li>
          <li id='about'>About</li>
          {
            dropdown &&
            <Dropdown dropdownName={dropdownName}
            // position={position} 
            />}
        </ul>
      </nav>
      <div
        className='d-flex
      justify-content-end
      align-items-center
      '>
        <p
          className='my-auto'>
          Login</p>
        <button
        >Register</button>
      </div>
    </header>
  )
}

export default Header
