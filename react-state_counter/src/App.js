import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  // let count = 0;
  const [count, setCount] = useState(0);

  function handlePuls() {
    setCount(count + 1);
  }

  function handleMinus() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button type="button" onClick={handleMinus}>
          -
        </button>

        <button type="button" onClick={handlePuls}>
          +
        </button>
      </div>
    </div>
  );
}

