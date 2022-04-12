import React, { useState } from "react";

function ToDoList() {
  const [todo, setTodo] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const todo = event.currentTarget.value;
    setTodo(todo);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(todo);
  };
  return (
    <>
      <h1>ToDoList</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} type="text" placeholder="write to-dos" />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default ToDoList;
