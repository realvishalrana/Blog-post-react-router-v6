import { Navigate, createBrowserRouter, useRouteError } from "react-router-dom";
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
      {
        errorElement: <ErrorPage />,
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
          {
            path: "*",
            element: <h1>404 Page</h1>,
          },
        ],
      },
    ],
  },
]);

function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <h1>Error - Something went wrong</h1>
      {import.meta.env.MODE !== "production" && (
        <>
          <pre>{error.message}</pre>
          <pre>{error.stack}</pre>
        </>
      )}
    </>
  );
}
