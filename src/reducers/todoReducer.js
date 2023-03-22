import { createSelector } from "reselect";

const initState = {
  todoList: [
    {
      id: 1,
      content: "Play video game",
      weight: 1,
      reactions: {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0,
      },
    },
    {
      id: 2,
      content: "Learn nodejs & python",
      weight: 2,
      reactions: {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0,
      },
    },
    {
      id: 3,
      content: "Join meetup event",
      weight: 3,
      reactions: {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0,
      },
    },
    {
      id: 4,
      content: "Join meetup event",
      weight: 3,
      reactions: {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0,
      },
    },
    {
      id: 5,
      content: "Join meetup event",
      weight: 3,
      reactions: {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0,
      },
    },
    {
      id: 6,
      content: "Join meetup event",
      weight: 3,
      reactions: {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0,
      },
    },
    {
      id: 7,
      content: "Join meetup event",
      weight: 3,
      reactions: {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0,
      },
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
        todoList:state.todoList.filter(todo=> todo.id !== action.payload)
      };
    case "REACTION_ADDED":
      return {
        ...state,
        todoList:state.todoList.map(todo => {
          if(todo.id !== action.payload.id) {
            return todo
          }
          return {
            ...todo,
            reactions: {
              ...todo.reactions,
              [action.payload.name]: action.payload.value,
            },
          };
        })
      }
    default:
      return state;
  }
};
export const getTodosSelector = (state) => state.todos.todoList;

export const getTodosWithLetter = createSelector(
  getTodosSelector,
  (state, Letter) => Letter,
  (todos, Letter) => {
    console.log("hello");
    console.log(todos)
    return todos.filter((todo) => todo.content.includes(Letter));
  }
);
//createSelector returns a callback function where arguments are inputs

export default todoReducer;
