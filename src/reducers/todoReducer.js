import { createSelector } from "reselect";

const initState = {
  todoList: [
    {
      id: 1,
      content: "Play video game",
      weight: 1,
    },
    {
      id: 2,
      content: "Learn nodejs & python",
      weight: 2,
    },
    {
      id: 3,
      content: "Join meetup event",
      weight: 3,
    },
  ],
};
const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todoList: action.payload,
      };
    default:
      return state;
  }
};
export const getTodosSelector = state => state.todos.todoList

export const getTodosWithLetter = createSelector(
  getTodosSelector,
  (state, Letter) => Letter,
  (todos, Letter) => {
    console.log('hello')
    return todos.filter((todo) => todo.content.includes(Letter))
  }
);
//createSelector returns a callback function where arguments are inputs


export default todoReducer;
