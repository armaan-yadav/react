import React, { useState } from "react";

const Calculator = () => {
  const temp = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [firstNum, setFirstNum] = useState("");
  const [secondNum, setSecondNum] = useState("");
  const [result, setResult] = useState("");
  const [operation, setOperation] = useState("");

  const operate = (val1, val2, type) => {
    switch (type) {
      case "+":
        return Number(val1) + Number(val2);
      case "-":
        return Number(val1) - Number(val2);
      case "x":
        return Number(val1) * Number(val2);
      case "/":
        return Number(val1) / Number(val2);

      default:
        return "";
    }
  };
  console.log(firstNum, operation, secondNum);

  return (
    <div className="h-screen flex items-center justify-center  flex-col">
      <h1 className="font-bold  font-3xl">calc</h1>

      <div className="bg-slate-400 h-[30px] ">
        {result == "" ? (
          <p>
            {firstNum} {operation} {secondNum}
          </p>
        ) : (
          result
        )}
      </div>
      <div className="flex flex-row">
        <div className="grid grid-cols-3 gap-2">
          {temp.map((e) => {
            return (
              <CalculatorButton
                onPressed={() => {
                  if (firstNum == "") {
                    setFirstNum(e.toString());
                  } else {
                    setSecondNum(e.toString());
                  }
                }}
                symbol={e.toString()}
                style={""}
                key={e}
              />
            );
          })}
          <CalculatorButton
            symbol={"C"}
            onPressed={() => {
              setFirstNum("");
              setSecondNum("");
              setOperation("");
              setResult("");
            }}
          />
          <CalculatorButton
            symbol={"="}
            onPressed={() => {
              var temp = operate(firstNum, secondNum, operation);
              setResult(temp);
              setFirstNum(temp);
              setSecondNum("");
            }}
          />
        </div>
        <div className="grid grid-cols-1">
          <CalculatorButton
            onPressed={() => {
              setOperation("+");
            }}
            style={""}
            symbol={"+"}
          />
          <CalculatorButton
            onPressed={() => {
              setOperation("-");
            }}
            style={""}
            symbol={"-"}
          />
          <CalculatorButton
            onPressed={() => {
              setOperation("x");
            }}
            style={""}
            symbol={"x"}
          />
          <CalculatorButton
            onPressed={() => {
              setOperation("/");
            }}
            style={""}
            symbol={"/"}
          />
        </div>
      </div>
    </div>
  );
};

const CalculatorButton = ({ symbol, onPressed, style }) => {
  return (
    <button
      key={symbol}
      className={`mx-2 my-3 px-4 py-2 rounded-md bg-gray-300 ${style}`}
      onClick={onPressed}
    >
      {symbol}
    </button>
  );
};

export default Calculator;
