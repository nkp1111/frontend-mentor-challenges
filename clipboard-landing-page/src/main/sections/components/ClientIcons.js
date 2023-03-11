import React from 'react'
import { additionalInfoIcons } from '../../../assets/data'

function ClientIcons() {
  return (
    <div className='client-icons d-flex justify-content-between align-items-center'>
      {additionalInfoIcons.map(item => {
        return (
          <div className="icon-holder" key={item.id}>
            <img src={item.icon} alt={item.title} />
          </div>
        )
      })}
    </div>
  )
}

export default ClientIcons
