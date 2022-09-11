import React from 'react'
import Footer from './Footer/index';
import Header from './Header/index'
import Main from './Main/index'

function App() {

  const BackRef = React.useRef()
  const toggle = (resizePixel, change) => {
    window.addEventListener('resize', (e) => {
      if (window.innerWidth <= resizePixel) {
        change(false)
      }
      else {
        change(true)
      }
    })
    if (window.innerWidth <= resizePixel) {
      change(false)
    }
    else {
      change(true)
    }
  }

  return (
    <div className="App">
      <div style={{
        position: 'absolute',
        height: '100vh',
        width: '100vw',
        backgroundColor: 'transparent',
        zIndex: '-1'
      }}
        ref={BackRef}></div>
      <Header toggle={toggle} BackRef={BackRef} />
      <Main toggle={toggle} />
      <Footer />
    </div>
  );
}

export default App;

