import React, { useId, useState } from "react";

const TodoApps = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  const addTodo = (text) => {
    console.log("add todo called");
    setTodos([
      ...todos,
      {
        text: text,
        isCompleted: false,
        id: Math.floor(Math.random() * 100),
      },
    ]);
  };

  const removeTodo = (id) => {
    var newTodos = todos.filter((e) => e.id != id);
    setTodos(newTodos);
  };

  const markTodoCompleted = (id) => {
    // var newTodos = todos.map((e) => {
    //   return e.id == id ? { ...e, isCompleted: true } : e;
    // });
    // setTodos(newTodos);

    //* MORE OPTIMISED APPROACH
    setTodos((prevTodos) =>
      prevTodos.map((e) => (e.id === id ? { ...e, isCompleted: true } : e))
    );
  };

  const markTodoIncompleted = (id) => {
    var newTodos = todos.map((e) => {
      return e.id == id ? { ...e, isCompleted: false } : e;
    });
    setTodos(newTodos);
  };

  return (
    <div className="w-full h-screen bg-red-400">
      <h1 className="text-4xl text-center font-bold">Todos App</h1>

      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />

        <button
          type="button"
          onClick={() => {
            if (value.trim() != "") {
              addTodo(value);
              setValue("");
            }
          }}
        >
          Add Todos
        </button>
      </div>

      <div>
        {todos.length > 0 &&
          todos?.map((e) => (
            <li key={e.id}>
              <span className={e.isCompleted == true ? `line-through` : ``}>
                {e.text}
              </span>
              <input
                type="checkbox"
                checked={e.isCompleted}
                onChange={(a) => {
                  e.isCompleted
                    ? markTodoIncompleted(e.id)
                    : markTodoCompleted(e.id);
                }}
              />{" "}
              <button onClick={() => removeTodo(e.id)}>Delete</button>
            </li>
          ))}
      </div>
    </div>
  );
};

export default TodoApps;
