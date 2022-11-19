import React from 'react'
import useGlobalContext from './context';
import Footer from './footer'

function App() {

  const val = useGlobalContext()
  console.log(val);
  return (
    <div className="App">
      <Footer />
    </div>
  );
}

export default App;
