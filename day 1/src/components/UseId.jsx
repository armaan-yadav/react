import React, { useId } from "react";

const UseId = () => {

  const sth = useId();
  

  return (
    <>
      <h1>id: {sth}</h1>
    </>
  );
};

export default UseId;
