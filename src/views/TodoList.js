import React, { useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from "../components/TodoItem";
import { getTodosSelector, getTodosWithLetter } from "../reducers/todoReducer";

const TodoList = () => {
  // const todoList = useSelector(state=>getTodosWithLetter(state,'j'));
  const todoList = useSelector(getTodosSelector);
  const dispatch = useDispatch();
const [content,setContent] = useState('hello')
  const [inputTodo, setInputTodo] = useState("");

  const handleInput = (e) => {
    setInputTodo(e.target.value);
  };
  //Handle onClick event
  const addNewTodo = () => {
    //Valid input value
    let newTodoObject = {
      id: Math.random(),
      content: inputTodo,
      weight: Math.random(),
    };
    //Add new todo item into List with the action
    dispatch({ type: "ADD_TODO", payload: newTodoObject });
    setInputTodo("");
  };
  function returnBlankNodes(content) {
    let nodes = [];
    for (let i = 0; i < 10000; i++) {
      console.log(content);
      nodes.push(<p></p>);
    }
    return nodes;
  }
  const returnBlankedNodes = useMemo(() =>returnBlankNodes(content),[content])

  return (
    <section id="section-todo">
      <h3 className="center-align white-text blue">Todo List</h3>
      {todoList.length > 0 ? (
        <ul className="collection">
          {todoList.map((item) => {
            return <TodoItem key={item.id} item={item} />;
          })}
        </ul>
      ) : (
        <p className="center-align">You don't have anything to do! Awesome!</p>
      )}

      <div className="row">
        <p className="red-text err-msg col s12 center-align"></p>
        <div className="input-field col s10">
          <input
            onChange={handleInput}
            value={inputTodo}
            placeholder="Add todo..."
            id="todo-input"
            type="text"
          />
          <label htmlFor="todo-input" className="active">
            New Todo
          </label>
        </div>

        <button className="btn col s2 blue" onClick={addNewTodo}>
          Add
        </button>
      </div>
      {/* {returnBlankNodes()} */}
      {returnBlankedNodes}
      <input type="text" value={content} onChange={e=>setContent(e.target.value)}/>
    </section>
  );
};
export default TodoList;

