import React, { useState } from "react";
import Circle from "./Circle";

function App() {
  const [value, setValue] = useState("");

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input onChange={onChange} value={value} type="text" placeholder="username" />
      <button>Log in</button>
    </form>
  );
}

export default App;
