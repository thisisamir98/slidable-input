import React, { useState } from "react";
import ReactDOM from "react-dom";
import SlidableInput from "./SlidableInput";

function App() {
  const [value, setValue] = useState(10);
  const [valueTwo, setValueTwo] = useState(6);
  const [valueThree, setValueThree] = useState(87);
  const [valueFour, setValueFour] = useState(42);

  return (
    <div>
      <SlidableInput
        style={{
          color: "red",
          fontFamily: "monospace",
          display: "flex",
          justifyContent: "center",
        }}
        minValue={-100}
        maxValue={100}
        value={value}
        onChange={(nextValue) => setValue(nextValue)}
      />
      <SlidableInput
        style={{
          color: "blue",
          fontFamily: "monospace",
          display: "flex",
          justifyContent: "center",
        }}
        minValue={-100}
        maxValue={100}
        value={valueTwo}
        onChange={(nextValue) => setValueTwo(nextValue)}
      />
      <SlidableInput
        style={{
          color: "green",
          fontFamily: "monospace",
          display: "flex",
          justifyContent: "center",
        }}
        minValue={-100}
        maxValue={100}
        value={valueThree}
        onChange={(nextValue) => setValueThree(nextValue)}
      />
      <SlidableInput
        style={{
          color: "brown",
          fontFamily: "monospace",
          display: "flex",
          justifyContent: "center",
        }}
        minValue={-100}
        maxValue={100}
        value={valueFour}
        onChange={(nextValue) => setValueFour(nextValue)}
      />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
