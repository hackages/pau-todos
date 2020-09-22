import React from "react";

interface ITodoListProps {
  todos: string[];
}

export function TodoList({ todos }: ITodoListProps) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
}
