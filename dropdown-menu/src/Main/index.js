import React from 'react'

function Main({ toggle }) {
  const [change, setChange] = React.useState(true)
  React.useEffect(() => {
    toggle(550, setChange)
  })

  return (
    <main className='d-flex
    justify-content-evenly
    w-100'>
      <section
        className='w-50
        '>
        <article className='d-flex
        flex-column
        justify-content-evenly'>
          <h1>Make{change && <br />} remote work</h1>
          <div id='text-holder'>
            <p>Get your team in sync, no matter your location. Streamline processes,
              create team rituals, and watch productivity soar.</p>
          </div>
          <div className='w-50 p-0'>
            <button>Learn more</button>
          </div>
        </article>
        <aside className='d-flex
        align-items-center'>
          <img src='https://raw.githubusercontent.com/nkp1111/frontend-mentor-challenges/b4dcf216922bb6f28428d89fd83e06d19a16bc04/dropdown-menu/public/images/client-databiz.svg' alt='databiz-logo' />
          <img src='https://raw.githubusercontent.com/nkp1111/frontend-mentor-challenges/b4dcf216922bb6f28428d89fd83e06d19a16bc04/dropdown-menu/public/images/client-audiophile.svg' alt='audio-phile-logo' />
          <img src='https://raw.githubusercontent.com/nkp1111/frontend-mentor-challenges/b4dcf216922bb6f28428d89fd83e06d19a16bc04/dropdown-menu/public/images/client-meet.svg' alt='meet-logo' />
          <img src='https://raw.githubusercontent.com/nkp1111/frontend-mentor-challenges/b4dcf216922bb6f28428d89fd83e06d19a16bc04/dropdown-menu/public/images/client-maker.svg' alt='maker-logo' />
        </aside>
      </section>

      <section className='d-flex
      justify-content-end'>
        <img src={change
          ? 'https://github.com/nkp1111/frontend-mentor-challenges/blob/main/dropdown-menu/public/images/image-hero-desktop.png?raw=true'
          : 'https://github.com/nkp1111/frontend-mentor-challenges/blob/main/dropdown-menu/public/images/image-hero-mobile.png?raw=true'
        }
          alt='black background with man using laptop'
          className='w-100' />
      </section>
    </main>
  )
}

export default Main
