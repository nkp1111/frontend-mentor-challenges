import React from 'react'
import { footerData, footerIconData, logoIcon } from '../assets/data'

function footer() {
  return (
    <footer>
      <div className='row'>

        <div className='col-md-3'>
          {/* logo */}
          <img src={logoIcon} alt="shortly logo icon" />
        </div>

        <div className='footer-links col-md-7 row'>
          {/* footer feature info */}
          {footerData.map(item => {
            return (
              <ul
                key={item.id}
                className="col-md-4"
              >
                <li className='footer-item-head'>{item.title}</li>
                {item.subitems.map(subitem => {
                  return (
                    <li key={subitem}>{subitem}</li>
                  )
                })}
              </ul>
            )
          })}
        </div>

        <div className='col-md-2'>
          {/* footer icons */}
          <ul>
            {footerIconData.map((icon, ind) => {
              return (
                <li key={ind}
                  className='bg-dark'>
                  <img src={icon} alt="icon" />
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="blank">Frontend Mentor</a>.
        Coded by <a href="https://github.com/nkp1111">Neeraj Parmar</a>.
      </div>
    </footer>
  )
}

export default footer
