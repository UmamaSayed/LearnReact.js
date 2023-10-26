import React, { useState } from "react";

function App() {
  const [count, updateCount] = useState(0);
  function increase() {
    updateCount(count + 1);
  }
  function decrease() {
    updateCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
