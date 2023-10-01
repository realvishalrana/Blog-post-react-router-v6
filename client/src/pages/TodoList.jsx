import { useLoaderData } from "react-router-dom";
import { getTodos } from "../api/todos";

const TodoList = () => {
  const todos = useLoaderData();

  return (
    <>
      <h1 className="page-title">TodoList</h1>
      <ul>
        {todos.map((todo) => {
          return (
            <li
              key={todo.id}
              className={todo.completed ? "strike-through" : undefined}
            >
              {todo.title}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;

function loader({ request: { signal } }) {
  return getTodos({ signal });
}

export const todoListRouter = {
  element: <TodoList />,
  loader,
};
