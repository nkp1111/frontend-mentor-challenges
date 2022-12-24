import React from 'react'
import { headerDesktop, headerMobile } from './assets/data'

function App() {
  return (
    <main className="App">
      <h1 className='hidden-heading'>Job listing filter</h1>
      <picture>
        <source srcSet={headerMobile}
          media="(max-width: 700px)"></source>
        <img src={headerDesktop} alt="purple background" />
      </picture>
    </main>
  );
}

export default App;
