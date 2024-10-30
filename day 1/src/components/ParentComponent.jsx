import React, { useEffect, useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [count, setCount] = useState(() => {
    console.log("value set for count");

    return 10;
  });

  const increment = (_) => setCount(count + 1);
  const decrement = (_) => setCount(count - 1);

  const [temp, setTemp] = useState(() => {
    return 10;
  });

  return (
    <>
      {/* <h1>I am parent</h1>

      <h1>{count}</h1>
      <button type="button" onClick={increment}>
        Increase from parent
      </button>
      <button type="button" onClick={decrement}>
        decrease from parent
      </button>
      <ChildComponent setCount={setCount} count={count} increment={increment} /> */}
      {/* 
      <h1>{temp}</h1>

      <button type="button" onClick={() => setTemp(40)}>
        CLick me


        
      </button> */}

      <h1>Hello World</h1>


      <ChildComponent/>
    </>
  );
};

export default ParentComponent;
