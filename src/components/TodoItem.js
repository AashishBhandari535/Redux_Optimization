import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactionButtons from "./ReactionButtons";

//Single todo item component
let TodoItem = ({item}) => {
  const dispatch = useDispatch();
  const {id} = item
  console.log(item)
  console.log("---------------")
  const removeTodoItem = () => {
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
function todoItemPropsEqual(prevProps, nextProps) {
  console.log(prevProps.item === nextProps.item);
}

TodoItem = React.memo(TodoItem,todoItemPropsEqual);
export default TodoItem;
