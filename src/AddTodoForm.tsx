import React, { useState } from 'react';
import { Button } from "sancho";

interface Props {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState('');

  return (
    <form>
        <input
            type="text"
            value={text}
            onChange={e => {
            setText(e.target.value);
            }}
        />
        <Button
            intent="primary"
            size="sm"
            variant="outline"
            type="submit"
            onClick={e => {
            e.preventDefault();
            addTodo(text);
            setText('');
        }}
        >
            Add Todo
        </Button>
    </form>
  );
};
