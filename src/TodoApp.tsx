import React, { useState } from "react";
import { InputElement } from "./components/InputElement";
import { TodoList } from "./components/TodoList";

export function TodoApp(): JSX.Element {
  const [todos, updateTodos] = useState<string[]>([]);

  function handler(todo: string) {
    if (todo) {
      const results = [...todos, todo];
      updateTodos(results);
    }
  }
  return (
    <>
      <h1>Todo App</h1>
      <hr />
      <InputElement handler={handler}></InputElement>
      <hr />
      <TodoList todos={todos}></TodoList>
    </>
  );
}
