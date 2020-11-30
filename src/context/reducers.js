import { ADD_TODO, REMOVE_TODO } from "./action.types";

const TodoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload]; //No need of break as we are returning
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
};

export default TodoReducer;
