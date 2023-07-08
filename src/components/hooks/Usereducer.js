import React from "react";
import { useReducer } from "react";
export const initialTodos = [
  {
    id: 1,
    todo: "Watch Cricket",
    complete: false,
  },

  {
    id: 2,
    todo: "Do coding",
    complete: false,
  },
];

export const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });

    default:
      return state;
  }
};

export function Usereducer() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  function handleComplete(todo) {
    dispatch({
      type: "COMPLETE",
      id: todo.id,
    });
  }
  return (
    <>
      <div>Todo Application</div>
      {todos.map((todo) => {
        return (
          <div>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => {
                handleComplete(todo);
              }}
            ></input>

            {todo.todo}
          </div>
        );
      })}
    </>
  );
}
