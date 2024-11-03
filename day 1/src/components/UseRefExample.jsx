import React, { useRef, useState } from "react";

const UseRefExample = () => {
  const inputElementRef = useRef(null);
  const handleClick = () => {
    inputElementRef.current.value = "Armaan";
    inputElementRef.current.focus();
  };
  const [value, setValue] = useState(0);
  const temp = useRef(0);
  let temp1 = 0;

  return (
    <div>
      <input type="text" ref={inputElementRef} />
      <button onClick={handleClick}>Click here</button>
      {/* <h1>count : {value}</h1>
      <button
        onClick={(_) => {
          setValue(value + 1);
          temp.current = temp.current + 1;
          temp1 += 1;
        }}
      >
        click me
      </button> */}
    </div>
  );
};

export default UseRefExample;
