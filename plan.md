# React To-Do App

## Part 1 🌶️

1. Use state to store the todos in App.js
2. Update ToDoList.js to apply the `className` "done" conditionally -- only if the todo's `done === true`.
3. Create a controlled form component in ToDoForm.js, i.e., use state to track the form input and update it on change.
4. Create a form submit handler to add a new todo to the list. The new todo should default to `done: false`.
5. Create a click handler so that todos can be marked as done. This function should set `done: true` for the selected todo.

## Part 2 🌶️️️️️🌶️

1. Use the dependencies tab to the left to add `react-router-dom` as a dependency.
2. Import `BrowserRouter as Router` and wrap your app in a `<Router>` component.
3. Add `Routes` and `Link` elements to allow our user to navigate. Our app should have the following routes:

- `http://locahost:3000/` shows the todo list
- `http://localhost:3000/add` shows the add form

4. After adding a todo, the user should be navigated back to the `/` route.

## Stretch Goals 🌶️️️🌶️🌶️

1. Add a delete button to each todo item that renders if the item is done. If clicked, it deletes the todo from the list.
2. Add a reset button to the ToDoList view that lets the user clear the todo list.
3. Allow the user to check if a todo is "done" when creating it. Use an input `type="checkbox"`.
4. Allow the user to edit todo items.

## Review

- Draw the component hierarchy. How did you pass data between components?
- Explain the purpose of the useState hook and how it was used in the application.
- What was the purpose of the key prop?
