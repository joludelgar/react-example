import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Button(props) {
  const handleClick = () => props.onClickFunction(props.increment);
  return (
    <button class="btn" onClick={handleClick}>
      +{props.increment}
    </button>
  );
}

function Reset(props) {
  const resetClick = () => props.onClickFunction();
  return (
    <button class="btn" onClick={resetClick}>
      Borrar
    </button>
  );
}

function Display(props) {
  return (
    <div id="display">
      <span id="text">{props.message}</span>
    </div>
  );
}

function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = incrementValue =>
    setCounter(counter + incrementValue);
  const resetCounter = () => setCounter(0);
  return (
    <div>
      <Button onClickFunction={incrementCounter} increment={1} />
      <Button onClickFunction={incrementCounter} increment={5} />
      <Button onClickFunction={incrementCounter} increment={10} />
      <Button onClickFunction={incrementCounter} increment={100} />
      <Display message={counter} />
      <Reset onClickFunction={resetCounter} />
    </div>
  );
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
