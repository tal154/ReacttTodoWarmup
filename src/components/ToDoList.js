export default function ToDoList({ todos, handleDone }) {
  function isDone(todo) {
    return todo.done ? "done" : "";
  }

  return (
    <ul className="post-it">
      {todos.map((todo, idx) => {
        return (
          <li key={`${idx}-${todo}`}>
            <span className={isDone(todo)}>{todo.item}</span>
            <button onClick={(e) => handleDone(todo.id)}>Done</button>
          </li>
        );
      })}
    </ul>
  );
}
