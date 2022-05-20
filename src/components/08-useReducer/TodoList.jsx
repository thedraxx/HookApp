import React from "react";
import { TodoListItem } from "./TodoListItem";

export const TodoList = ({ todos, handleToggle, handleDelete }) => {
  return (
    <div>
      <ul className="list-group list-group-flush">
        {todos.map((todo, i) => (
          <TodoListItem
            todo={todo}
            i={i}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};
