import React from 'react'
import { featureData } from '../data'

function FeatureDropdown({ sidebar }) {
  return (
    <div
      style={sidebar !== undefined ? {
        position: 'absolute',
        top: '100',
        left: '320'
      } :
        { backgroundColor: 'white' }}>
      <ul style={{ transition: 'linear 0.8s all' }}>
        {featureData.map((item, ind) => {
          const { src, title } = item
          return (
            <li key={ind}>
              <img src={src}
                alt={title} />
              {title}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default FeatureDropdown
