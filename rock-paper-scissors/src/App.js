import React from 'react'
import useGlobalContext from './context';
import Footer from './Footer'
import Game from './Game/index';
import Modal from './Modal/Modal';
import Rule from './Modal/Rule';

function App() {

  const { modalOpen } = useGlobalContext()
  return (
    <>
      <h1>
        Rock Paper Scissors Game
      </h1>
      {modalOpen && <Modal />}
      <Game />
      <Rule />
      <Footer />
    </>
  );
}

export default App;


//   You Win
//   You Lose

//   Play Again