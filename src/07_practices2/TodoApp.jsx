import React, { useState } from "react";

const TodoApp = () => {
  const [todo, setTodo] = useState("");
  const [alltodo, setAllTodo] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("todos"));
    return saved ? saved : [];
  });
  console.log(todo);
  console.log(alltodo);
  const handleSubmit = (e) => {
    e.preventDefault();
    const todos = { id: Date.now(), text: todo };
    const updatedtodo = [...alltodo, todos];
    setAllTodo(updatedtodo);
    localStorage.setItem("todos", JSON.stringify(updatedtodo));
    setTodo("");
  };

  const handleDelete = (id) => {
    const todos = [...alltodo]
    const filterTodo = todos.filter((ele) => ele.id !== id);
    setAllTodo(filterTodo);
    localStorage.setItem("todos", JSON.stringify(filterTodo));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>TodoApp</h1>
      <input
        type="text"
        id="todo"
        placeholder="Enter Todo....."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button>Create</button>
      <hr />
      <h4>Display allTodos here........</h4>
      {alltodo.length === 0 ? (
        <p>No Todos Availbale</p>
      ) : (
        <section>
          {alltodo.map((ele) => {
            return (
              <div key={ele.id}>
                <h4>{ele.text}</h4>
                <button>Edit</button>
                <button onClick={() => handleDelete(ele.id)}>Delete</button>
              </div>
            );
          })}
        </section>
      )}
    </form>
  );
};

export default TodoApp;
