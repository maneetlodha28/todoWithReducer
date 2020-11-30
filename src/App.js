import React, { useReducer } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { TodoContext } from "./context/TodoContext";

import TodoForm from "./Components/TodoForm";
import TodoReducer from "./context/reducers";
import Todos from "./Components/Todos";
const App = () => {
  const [todos, dispatch] = useReducer(TodoReducer, []);
  return (
    <div>
      <TodoContext.Provider value={{ todos, dispatch }}>
        <Container fluid>
          <h1>to do app with context API</h1>
          <Todos />
          <TodoForm />
        </Container>
      </TodoContext.Provider>
    </div>
  );
};
export default App;
