import React, { useReducer, useState } from "react";

const ReducerExample = () => {
  const initialState = { count: 0 };
  const [value, setValue] = useState(0);

  const reducer = (state, action) => {
    switch (action.type) {
      case "inc":
        return { ...state, count: state.count + 1 };
      case "dec":
        return { ...state, count: state.count - 1 };
      case "res":
        return { ...state, count: 0 };
      case "incByValue":
        return { ...state, count: state.count + Number(action.payload) };
      case "decByValue":
        return { ...state, count: state.count - Number(action.payload) };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>Count : {state.count}</h1>
      <button type="button" onClick={() => dispatch({ type: "inc" })}>
        Increment
      </button>
      <button type="button" onClick={() => dispatch({ type: "dec" })}>
        Decrement
      </button>
      <button type="button" onClick={() => dispatch({ type: "res" })}>
        Reset
      </button>
      <br />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="button"
        onClick={() => {
          dispatch({ type: "incByValue", payload: value });
        }}
      >
        Inc By Value
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: "decByValue", payload: value });
        }}
      >
        Dec By Value
      </button>
    </>
  );
};

export default ReducerExample;
