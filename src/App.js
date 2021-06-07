import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const usePrevious = (value) => {
  let ref = useRef();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};

const App = () => {
  const [number, setNumber] = useState(0);
  const prevNumber = usePrevious(number);

  return (
    <div className="App">
      <h1>
        Şuanki Sayı: {number} Önceki Sayı: {prevNumber}
      </h1>
      <button
        onClick={() => setNumber(Math.floor(Math.random() * (100 - 0) + 0))}
      >
        Rastgele Sayı
      </button>
    </div>
  );
};

export default App;
