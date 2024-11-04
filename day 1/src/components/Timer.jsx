import React, { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);

  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef);
    };
  });

  return (
    <>
      <h1>Count : {count}</h1>
    </>
  );
};

export default Timer;
