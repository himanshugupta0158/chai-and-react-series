// we are creating reducer and in reduxtoolkit its called slice
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello",
      isComplete: false,
    },
  ],
  todo_update: {
    is_updating: false,
    id: null,
    text: null,
  },
};

// in reducer we always have access to state and action of the function defined
// state -> refers to current state of function/data in the function
// action -> what values we pass in the function (params for change like id)
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        // action.payload.text or action.payload works same here ,
        // it will automatically fetch that text only by comparing what you want
        text: action.payload,
        isComplete: false,
      };

      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      // it will only filter out those value whose id does not matches and other values will be skipped/not send.
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    },
    updating: (state, action) => {
      const { id } = action.payload;

      // If we are already updating and clicked on a new update, reset updating values
      if (state.todo_update.is_updating && state.todo_update.id !== id) {
        state.todo_update.is_updating = true;
      }

      // Toggle is_updating only if the id matches or there's no current id
      if (id === state.todo_update.id || state.todo_update.id === null) {
        state.todo_update.is_updating = !state.todo_update.is_updating;
      }
    },
    setUpdateValue: (state, action) => {
      const { id, text } = action.payload;
      if (state.todo_update.is_updating) {
        state.todo_update.id = id;
        state.todo_update.text = text;
      } else {
        state.todo_update.id = null;
        state.todo_update.text = null;
      }
    },
    isTodoCompleted: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, isComplete: !todo.isComplete }
          : todo
      );
    },
  },
});

export const {
  addTodo,
  removeTodo,
  updateTodo,
  updating,
  setUpdateValue,
  isTodoCompleted,
} = todoSlice.actions;

export default todoSlice.reducer;
