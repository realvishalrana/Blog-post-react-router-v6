import { Navigate, createBrowserRouter } from "react-router-dom";
import { postListRouter } from "./pages/PostList";
import { postRoute } from "./pages/Post";
import { userListRouter } from "./pages/UserList";
import { userRoute } from "./pages/User";
import { todoListRouter } from "./pages/TodoList";
import RootLayout from "./layouts/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Navigate to="/posts" /> },
      {
        path: "posts",
        children: [
          {
            index: true,
            ...postListRouter,
          },
          {
            path: ":postId",
            ...postRoute,
          },
        ],
      },
      {
        path: "users",
        children: [
          {
            index: true,
            ...userListRouter,
          },
          {
            path: ":userId",
            ...userRoute,
          },
        ],
      },
      {
        path: "todos",
        ...todoListRouter,
      },
    ],
  },
]);
