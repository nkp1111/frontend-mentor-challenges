import React from 'react'
import { logosData } from '../data'

function Main({ toggle }) {
  const [change, setChange] = React.useState(true)
  React.useEffect(() => {
    toggle(550, setChange)
  })

  return (
    <main className='d-flex
    justify-content-evenly
    w-100'>
      <article className='d-flex
        flex-column
        justify-content-evenly
        w-50'>
        <h1>Make{change && <br />} remote work</h1>
        <div id='text-holder'>
          <p>Get your team in sync, no matter your location. Streamline processes,
            create team rituals, and watch productivity soar.</p>
        </div>
        <div className='w-50 p-0'>
          <button>Learn more</button>
        </div>
        <aside className='d-flex
        align-items-center'>
          {logosData.map((item, ind) => {
            const { src, alt } = item
            return (
              <img key={ind}
                src={src}
                alt={alt} />
            )
          })}
        </aside>
      </article>
      <article className='d-flex
      justify-content-end'>
        <img src={change
          ? 'https://github.com/nkp1111/frontend-mentor-challenges/blob/main/dropdown-menu/public/images/image-hero-desktop.png?raw=true'
          : 'https://github.com/nkp1111/frontend-mentor-challenges/blob/main/dropdown-menu/public/images/image-hero-mobile.png?raw=true'
        }
          alt='black background with man using laptop'
          className='w-100' />
      </article>
    </main>
  )
}

export default Main
