import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const PostCard = ({ id, title, body }) => {
  return (
    <>
      <div className="card" key={id}>
        <div className="card-header">{title}</div>
        <div className="card-body">
          <div className="card-preview-text">{body}</div>
        </div>
        <div className="card-footer">
          <Link className="btn" to={`/posts/${id}`}>
            View
          </Link>
        </div>
      </div>
    </>
  );
};

PostCard.propTypes = {
  id: PropTypes.string,
  body: PropTypes.string,
  title: PropTypes.string,
};

export default PostCard;
