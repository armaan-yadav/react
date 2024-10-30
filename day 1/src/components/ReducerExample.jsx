import React, { useReducer } from "react";

const ReducerExample = () => {
  const initialState = { count: 0 };

  const reducer = (state, action) => {
    switch (action.type) {
      case "inc":
        return { ...state, count: state.count + 1 };
      case "dec":
        return { ...state, count: state.count - 1 };
      case "res":
        return { ...state, count: 0 };

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
    </>
  );
};

export default ReducerExample;
