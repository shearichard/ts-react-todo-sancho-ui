import React, { useState } from 'react';
import { Global } from "@emotion/core";
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';
import { Helmet } from "react-helmet";

const initialTodos: Todo[] = [
  {
    text: 'Walk the dog',
    complete: false,
  },
  {
    text: 'Write app',
    complete: true,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <>
        <Global
            styles={{
                body: {
                    margin: 0,
                    padding: 0
                }
            }}
        />
        <Helmet titleTemplate="%s | Todo with Sancho" defaultTitle="Todo with Sancho" />
        <TodoList todos={todos} toggleTodo={toggleTodo} />
        <AddTodoForm addTodo={addTodo} />
    </>
  );
}

export default App;
