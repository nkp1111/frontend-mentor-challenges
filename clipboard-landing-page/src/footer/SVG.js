import React from 'react'


function SVG({ footerIcons }) {

  return (
    <div className="footer-icons d-flex">
      {footerIcons.map(item => {
        return (
          <div key={item.id}>
            <a href={item.link}>
              <img src={item.icon} alt={item.title} />
            </a>
          </div>
        )
      })}
    </div>
  )
}

export default SVG

