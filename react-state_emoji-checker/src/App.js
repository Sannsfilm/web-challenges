import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  // let code = "?";
  const [code, setCode] = useState("");
  console.log(code);
  const validCode = "🐡🐠🐋";

  function HandleClick(event) {
    setCode(code + event.target.textContent);
  }

  function HandleReset() {
    setCode("");
  }

  return (
    <div className="container">
      <div className="button-container">
        <button type="button" onClick={HandleClick}>
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button type="button" onClick={HandleClick}>
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button type="button" onClick={HandleClick}>
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>

      <button type="button" onClick={HandleReset}>
        Reset
      </button>

      {code === validCode && <p>Valid code!</p>}
    </div>
  );
}
