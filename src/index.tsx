import React from "react";
import ReactDOM from "react-dom";
import SlidableInput from "./SlidableInput";

ReactDOM.render(
  <React.StrictMode>
    <SlidableInput value={10} onChange={console.log} />
  </React.StrictMode>,
  document.getElementById("root"),
);
