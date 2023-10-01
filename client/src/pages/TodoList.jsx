import { useLoaderData } from "react-router-dom";
import { getTodos } from "../api/todos";
import TodoItem from "../components/TodoItem";

const TodoList = () => {
  const todos = useLoaderData();

  return (
    <>
      <h1 className="page-title">TodoList</h1>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
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
