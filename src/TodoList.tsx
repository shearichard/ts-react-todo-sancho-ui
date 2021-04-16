import React from 'react';
import { Table, TableBody, TableHead, TableRow, TableCell} from "sancho";
// eslint-disable-next-line
import { TodoListItem } from './TodoListItem';

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
}

//<ul>
//  {todos.map(todo => (
//    <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
//  ))}
//</ul>
//      <Table minWidth="600px">
//        <TableHead>
//          <TableRow>
//            <TableCell>Name</TableCell>
//          </TableRow>
//        </TableHead>
//        <TableBody>
//          <TableRow>
//            <TableCell >
//              Ben McMahen
//            </TableCell>
//          </TableRow>
//          <TableRow>
//            <TableCell scope="row">
//              James Bond
//            </TableCell>
//          </TableRow>
//        </TableBody>
//      </Table>

//
//                {todo.text}

export const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => {
  return (
      <Table minWidth="600px">
        <TableHead>
          <TableRow>
            <TableCell>Task</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

        {todos.map(todo => (
          <TableRow>
            <TableCell >
                <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
            </TableCell>
          </TableRow>
        ))}
        </TableBody>
      </Table>
  );
};
