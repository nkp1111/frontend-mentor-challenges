import React from "react";
import Attribution from "./Attribution";
import ImgDisplay from "./ImgDisplay";
import MainForm from "./MainForm";

function App() {
  return (
    <div className="App 
      d-flex
      h-100">
      <ImgDisplay />
      <MainForm />
      <Attribution />
      {/*<div>
          Coded by <a href="#">Your Name Here</a>.
        0000 0000 0000 0000
        Jane Appleseed
        00/00

        000

        Cardholder Name
        e.g. Jane Appleseed

        Card Number
        e.g. 1234 5678 9123 0000

        Exp. Date (MM/YY)
        MM
        YY

        CVC
        e.g. 123

        Confirm

        Thank you!
        We've added your card details
        Continue
      </div>*/}
    </div>

  );
}

export default App;
