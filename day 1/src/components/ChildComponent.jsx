import React, { useContext, useEffect, useState } from "react";
import { TempContext } from "./MainComponent";

const ChildComponent = ({ increment, setCount, count }) => {
  const { age, name } = useContext(TempContext);

  console.log("name", name);
  console.log("age", age);

  return (
    <>
      <h1>Namaste Duniya</h1>

      <h2>I am {name} and my age is {age}</h2>
    </>
  );
};

export default ChildComponent;
