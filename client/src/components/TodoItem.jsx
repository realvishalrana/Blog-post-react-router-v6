import { PropTypes } from "prop-types";

const TodoItem = ({ completed, title }) => {
  return <li className={completed && "strike-through"}>{title}</li>;
};

TodoItem.propTypes = {
  completed: PropTypes.bool,
  title: PropTypes.string,
};

export default TodoItem;
