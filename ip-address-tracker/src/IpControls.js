import React, { useRef } from 'react'
import { FiChevronRight } from 'react-icons/fi'


function IpControl({ setIpAddress }) {

  const ipRef = useRef(null)

  return (
    <>
      <div className="background"></div>
      <form onSubmit={(e) => {
        e.preventDefault()
        setIpAddress(ipRef.current.value)
      }}>
        <input type='text' placeholder='Search for any IP address or domain' name='location' id='location' autoFocus ref={ipRef} />
        <button type='submit'><FiChevronRight /></button>
      </form>
    </>
  )
}

export default IpControl
