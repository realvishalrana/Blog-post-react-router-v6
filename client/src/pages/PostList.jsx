import { Link, useLoaderData } from "react-router-dom";
import { getPosts } from "../api/posts";

function PostList() {
  const posts = useLoaderData();
  return (
    <>
      <h1 className="page-title">Posts</h1>
      <div className="card-grid">
        {posts.map((post) => (
          <div className="card" key={posts.id}>
            <div className="card-header">{post.title}</div>
            <div className="card-body">
              <div className="card-preview-text">{post.body}</div>
            </div>
            <div className="card-footer">
              <Link className="btn" to={`/posts/${post.id}`}>
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function loader({ request: { signal } }) {
  return getPosts({ signal });
}

// function loader({ request: { signal } }) {
//   return axios
//     .get("http://localhost:3000/posts", { signal })
//     .then((res) => res.data);
// }

export const postListRouter = {
  element: <PostList />,
  loader,
};
