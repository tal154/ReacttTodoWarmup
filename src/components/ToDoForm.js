import { useState } from "react";

export default function ToDoForm({ handleAdd }) {
  const [todo, setTodo] = useState("");

  function handleChange(event) {
    setTodo(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleAdd(todo);
    setTodo("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="todo">New To-Do </label>
        <input
          type="text"
          id="todo"
          name="todo"
          value={todo}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
}
