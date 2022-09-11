import React from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import FeatureDropdown from '../Dropdown/FeatureDropdown'
import ComapnyDropdown from '../Dropdown/ComapnyDropdown'

const iconStyle = { fontSize: 13, marginLeft: 5 }

function Nav({ sidebar }) {

  const [dropdownName, setDropdownName] = React.useState('')
  const [dropdown, setDropdown] = React.useState(false)
  const handleDropdown = (e) => {
    setDropdown(!dropdown)
    setDropdownName(e.target.id)
  }

  // condition to activate specific dropdown 
  const check = (value) => dropdown
    && dropdownName === value

  const checkIcon = (value) => {
    return check(value)
      ? <BsChevronDown style={iconStyle} />
      : <BsChevronUp style={iconStyle} />
  }

  return (
    <nav>
      <ul
        className='d-flex
        mt-2
        '>
        <li id='feature'
          onMouseDown={(e) => handleDropdown(e)}
        >Features
          {checkIcon('feature')}
          {check('feature')
            && <FeatureDropdown sidebar={sidebar} />}
        </li>
        <li id='company'
          onMouseDown={(e) => handleDropdown(e)}
        >Company
          {checkIcon('company')}
          {check('company')
            && <ComapnyDropdown sidebar={sidebar} />}
        </li>
        <li>Careers</li>
        <li id='about'>About</li>
      </ul>
    </nav>
  )
}

export default Nav
