import React, { useReducer } from 'react';
import { container, Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { ToDoContext, TodoContext } from './context/TodoContext';
import todoReducer from './context/reducer';
import ToDoForm from './Components/TodoForm';
import Todos from './Components/Todos';

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <Container fluid>
        <h1>ToDO App with Context API</h1>
        <Todos />
        <ToDoForm />
      </Container>
    </TodoContext.Provider>
  );
};

export default App;
