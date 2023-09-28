import { useState } from "react";

import "./styles.css";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, item: "Make the bed", done: true },
    { id: 2, item: "Do the dishes", done: false },
    { id: 3, item: "Walk the cat", done: false }
  ]);

  function getNextId() {
    return Math.max(...todos.map((td) => td.id), 0) + 1;
  }

  function handleAdd(newTodo) {
    const todoCopy = [...todos];
    todoCopy.push({ item: newTodo, done: false });
    setTodos(todoCopy);
  }

  function handleDone(id) {
    console.log(id);
    // create a new list
    const tempTodos = [];
    // loop through the list
    for (const todo of todos) {
      console.log(todo);
      // if we find the item, set done as true
      if (todo.id === id) {
        const updatedTodo = { ...todo, done: true };
        tempTodos.push(updatedTodo);
      } else {
        tempTodos.push(todo);
      }
    }
    setTodos(tempTodos);
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
      <ToDoList todos={todos} handleDone={handleDone} />
    </div>
  );
}
