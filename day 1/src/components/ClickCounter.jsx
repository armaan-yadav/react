import React, { useState } from "react";

const ClickCounter = () => {
  const [count, setCount] = useState(1);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <>
      <button onClick={increment}>+</button>

      <h1>{count}</h1>
      <button onClick={decrement}>-</button>
    </>
  );
};

export default ClickCounter;
