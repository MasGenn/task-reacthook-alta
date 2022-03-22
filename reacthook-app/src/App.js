import React from "react";
import { useState } from "react";
import FormTodoList from "./component/FormTodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Mengerjakan Exercise",
      completed: false,
    },
    {
      text: "Mengerjakan Assignment",
      completed: true,
    },
  ]);

  return <FormTodoList todos={todos} setTodos={setTodos} />;
}

export default App;
