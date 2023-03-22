import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactionButtons from "./ReactionButtons";

//Single todo item component
let TodoItem = ({item}) => {
  const dispatch = useDispatch();
  const {id} = item
  const removeTodoItem = () => {
    console.log(id)
    dispatch({ type: "REMOVE_TODO", payload: id });
  };

  return (
    <li className="collection-item" key={item.id}>
      {item.content}
      <span
        onClick={() => {
          removeTodoItem(item.id);
        }}
        className="secondary-content"
      >
        <i className="remove-btn material-icons blue-text">clear</i>
      </span>
      <div><ReactionButtons item={item}/></div>
    </li>
  );
};

TodoItem = React.memo(TodoItem);
export default TodoItem;
