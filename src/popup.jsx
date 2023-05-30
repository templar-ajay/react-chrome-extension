import React from "react";
import ReactDOM from "react-dom";

function Popup() {
  return (
    <div>
      <h1>Hello World!</h1>
      <p></p>
    </div>
  );
}

ReactDOM.render(<Popup />, document.getElementById("react-target"));
