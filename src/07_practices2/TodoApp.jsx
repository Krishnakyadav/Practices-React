// import React, { useState } from "react";

// const TodoApp = () => {
//   const [todo, setTodo] = useState("");
//   const [alltodo, setAllTodo] = useState(() => {
//     const saved = JSON.parse(localStorage.getItem("todos"));
//     return saved ? saved : [];
//   });
//   const [edit, setEdit] = useState(null);

//   const handleSubmit = (e) => {
//     console.log("hanldesubmit clicked")
//     e.preventDefault();

//     if (edit) {
//       const todos = [...alltodo];
//       const updated = todos.map((ele) => {
//         if (ele.id === edit) {
//           return { ...ele, text: todo };
//         } else {
//           return ele;
//         }
//       });
//       setAllTodo(updated);
//       localStorage.setItem("todos",JSON.stringify(updated));
//       setEdit(null);
//       setTodo("");
//       return;
//     }

//     if (!todo.trim()) {
//       alert("required field");
//       return;
//     }
//     const todos = { id: Date.now(), text: todo };
//     const updatedtodo = [...alltodo, todos];
//     setAllTodo(updatedtodo);
//     localStorage.setItem("todos", JSON.stringify(updatedtodo));
//     setTodo("");
//   };

//   const handleDelete = (id) => {
//     const todos = [...alltodo];
//     const filterTodo = todos.filter((ele) => ele.id !== id);
//     setAllTodo(filterTodo);
//     localStorage.setItem("todos", JSON.stringify(filterTodo));
//   };

//   const handleEdit = (id) => {
//     const todos = [...alltodo];
//     const TodoEdit = todos.find((ele) => ele.id === id);
//     console.log(TodoEdit.text);
//     setEdit(id);
//     setTodo(TodoEdit.text);
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <h1>TodoApp</h1>
//       <input
//         type="text"
//         id="todo"
//         placeholder="Enter Task"
//         value={todo}
//         onChange={(e) => setTodo(e.target.value)}
//       />
//       <button>{edit ? "update" : "Add"}</button>
//       <hr />
//       <h4>Display allTodos here........</h4>
//       {alltodo.length === 0 ? (
//         <p>No Todos Availbale</p>
//       ) : (
//         <section>
//           {alltodo.map((ele) => {
//             return (
//               <div key={ele.id}>
//                 <h4>{ele.text}</h4>
//                 <button type="button" onClick={() => handleEdit(ele.id)}>
//                   Edit
//                 </button>
//                 <button type="button" onClick={() => handleDelete(ele.id)}>
//                   Delete
//                 </button>
//               </div>
//             );
//           })}
//         </section>
//       )}
//     </form>
//   );
// };

// export default TodoApp;

import React from "react";

const TodoApp = () => {
  return (
    <div>
      <h1>Todo App</h1>
      <input type="text" placeholder="Enter Todo......" />
      <button>Create</button>
    </div>
  );
};

export default TodoApp;
