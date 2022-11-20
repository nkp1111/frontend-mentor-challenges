import React, { useEffect } from 'react'
import CommentHolder from './CommentHolder';
import Footer from './footer'
import './component.css'
import useGlobalContext from './context';

function App() {

  const { deleteModal } = useGlobalContext()
  useEffect(() => {
    const body = document.querySelector("body")
    if (deleteModal) {
      body.style.overflow = 'hidden'
    } else {
      body.style.overflow = 'visible'
    }
  })
  return (
    <div className="App">
      <CommentHolder />
      <Footer />
    </div>
  );
}

export default App;
