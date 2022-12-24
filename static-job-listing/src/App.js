import React from 'react'
import { headerDesktop, headerMobile } from './assets/data'
import Section from './components/Section'

function App() {
  return (
    <main className="App">
      <h1 className='hidden-heading'>Job listing filter</h1>
      <picture className='head-image'>
        <source srcSet={headerMobile}
          media="(max-width: 700px)"></source>
        <img src={headerDesktop} alt="purple background" />
      </picture>

      <Section />
    </main>
  );
}

export default App;
