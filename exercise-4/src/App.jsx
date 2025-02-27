import React, { useState, useEffect } from "react";

function App() {
  /* Constants used in this component */
  const DOLLAR_TO_EURO_RATIO = 0.92;
  const DOLLAR_TO_DONG_RATIO = 24560;

  const valueDollars = 15; // Set fixed dollar value

  const [valueEuro, setValueEuro] = useState(null);
  const [valueDong, setValueDong] = useState(null);

  // Convert the given value in dollars to a value in euro
  function dollarToEuro(valueInDollars) {
    return valueInDollars * DOLLAR_TO_EURO_RATIO;
  }

  // Convert the given value in dollars to a value in dong
  function dollarToDong(valueInDollars) {
    return valueInDollars * DOLLAR_TO_DONG_RATIO;
  }

  // Update the converted values for euro and dong
  useEffect(() => {
    setValueEuro(dollarToEuro(valueDollars));
    setValueDong(dollarToDong(valueDollars));
  }, []);

  return (
    <main>
      <h1>Device conversions</h1>

      <p>
        <label>Current value in dollars</label>
        <input disabled value={valueDollars} />

        <label>Value in Dong</label>
        <input disabled value={valueDong} />

        <label>Value in Euro</label>
        <input disabled value={valueEuro} />
      </p>
    </main>
  );
}

export default App;
