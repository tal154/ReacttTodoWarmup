import { useState } from "react";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

export default function App() {
  const [todos, setTodos] = useState([
    { item: "Make the bed", done: true },
    { item: "Do the dishes", done: false },
    { item: "Walk the cat", done: false }
  ]);

  function handleAdd(newTodo) {
    const todoCopy = [...todos];
    todoCopy.push({ item: newTodo, done: false });
    setTodos(todoCopy);
  }
  function handledone(todo) {
    console.log(todo);
  }

  return (
    <div className="App">
      <h1>My To-Do List</h1>
      <nav className="site-nav">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Add</a>
          </li>
        </ul>
      </nav>
      <ToDoForm handleAdd={handleAdd} />
      <ToDoList todos={todos} handledone />
    </div>
  );
}
