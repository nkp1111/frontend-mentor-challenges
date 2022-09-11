import React from 'react'

import { FaBars } from 'react-icons/fa'
import { GrClose } from 'react-icons/gr'
import LoginBtn from './LoginBtn'
import Nav from './Nav'
import Sidebar from './Sidebar'

const resizePixel = 800

function Header({ toggle, BackRef }) {

  // const [position, setPosition] = React.useState([0, 0])
  const [showBtn, setShowBtn] = React.useState(true)

  React.useEffect(() => {
    toggle(resizePixel, setShowBtn)

    sidebar
      ? BackRef.current.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'
      : BackRef.current.style.backgroundColor = 'rgba(0, 0, 0, 0)'

  })

  const [sidebar, setSidebar] = React.useState(false)
  const handleSidebar = (sidebar) => {
    setSidebar(!sidebar)
  }

  return (
    <>
      <header className="App-header
    d-flex
    justify-content-start
    align-items-center
    ">
        <div>
          <img src='https://raw.githubusercontent.com/nkp1111/frontend-mentor-challenges/b4dcf216922bb6f28428d89fd83e06d19a16bc04/dropdown-menu/public/images/logo.svg' className="App-logo" alt="logo" />
        </div>

        {showBtn
          ? <>
            <Nav sidebar={sidebar} />
            <LoginBtn />
          </>
          :
          <div id='toggle-btn'
            className='d-flex
              justify-content-end
              m-2
              fs-1'
            onClick={() => handleSidebar(sidebar)}
          >
            {sidebar
              ? <GrClose />
              : <FaBars />}
          </div>
        }
      </header>
      {sidebar &&
        <Sidebar />}
    </>
  )
}


export default Header
