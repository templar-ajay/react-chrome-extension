import React from "react";
import { createRoot } from "react-dom/client";

function Popup() {
  return (
    <div>
      <h1>Hello World!</h1>
      <p></p>
    </div>
  );
}

const reactTarget = document.getElementById("react-target");
const root = createRoot(reactTarget);
root.render(<Popup />);
