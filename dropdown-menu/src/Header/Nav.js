import React from 'react'
import Dropdown from '../Dropdown'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import FeatureDropdown from '../Dropdown/FeatureDropdown'
import ComapnyDropdown from '../Dropdown/ComapnyDropdown'

function Nav({ sidebar }) {

  const [dropdownName, setDropdownName] = React.useState('')
  const [dropdown, setDropdown] = React.useState(false)
  const handleDropdown = (e) => {
    setDropdown(true)
    // const margin = 40
    // const position = [e.clientX - margin, e.clientY + margin]
    // setPosition(position)
    setDropdownName(e.target.id)
  }

  return (
    <nav>
      <ul
        className='d-flex
        mt-2
        '>
        <li id='feature'
          onMouseOver={(e) => handleDropdown(e)}
          onMouseOut={() => setDropdown(false)}
        >Features <BsChevronDown />
          {dropdown && dropdownName === 'feature' && <FeatureDropdown sidebar={sidebar} />}
        </li>
        <li id='company'
          onMouseOver={(e) => handleDropdown(e)}
          onMouseOut={() => setDropdown(false)}>Company <BsChevronUp />
          {dropdown && dropdownName === 'company' && <ComapnyDropdown sidebar={sidebar} />}
        </li>
        <li>Careers</li>
        <li id='about'>About</li>
      </ul>
    </nav>
  )
}

export default Nav
