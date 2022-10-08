import React from 'react'
import useGlobalContext from './context';
import Footer from './Footer'
import Game from './Game';
import Modal from './Modal';
import Rule from './Rule';

function App() {

  const { modalOpen, handleModalOpen } = useGlobalContext()
  return (
    <>
      {modalOpen && <Modal />}
      <Game />
      <Rule />
      <Footer />
    </>
  );
}

export default App;


// Score
// Rules

//   You Picked
//   The House Picked

//   You Win
//   You Lose

//   Play Again