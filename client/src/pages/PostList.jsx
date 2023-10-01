import { useLoaderData } from "react-router-dom";
import { getPosts } from "../api/posts";
import PostCard from "../components/PostCard";

function PostList() {
  const posts = useLoaderData();
  return (
    <>
      <h1 className="page-title">Posts</h1>
      <div className="card-grid">
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
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
