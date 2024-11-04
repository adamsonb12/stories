import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

interface TodoListState {
  todos: Todo[];
  completedTodos: Todo[];
  createTodoInputTitle: string;
}

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

// ACTIONS
interface AddTodoAction {
  type: "ADD_TODO";
  payload: string;
}

interface CompleteTodoAction {
  type: "COMPLETE_TODO";
  payload: string;
}

interface EditCreateTodoInputTitleAction {
  type: "EDIT_CREATE_TODO_INPUT_TITLE";
  payload: string;
}

// REDUCER
export const todoListReducer = (
  prevState: TodoListState,
  action: AddTodoAction | CompleteTodoAction | EditCreateTodoInputTitleAction
): TodoListState => {
  switch (action.type) {
    case "ADD_TODO":
      const list = [
        ...prevState.todos,
        { id: uuidv4(), title: action.payload, completed: false },
      ];
      return { ...prevState, createTodoInputTitle: "", todos: list };
    case "COMPLETE_TODO":
      const completedTodo = prevState.todos.find((todo) => todo.id === action.payload);
      if (!completedTodo) return prevState;

      const completedList = [...prevState.completedTodos, completedTodo];
      const updatedTodos = prevState.todos.filter((todo) => todo.id !== action.payload);
      return { ...prevState, completedTodos: completedList, todos: updatedTodos };
    case "EDIT_CREATE_TODO_INPUT_TITLE":
      return { ...prevState, createTodoInputTitle: action.payload };
    default:
      return prevState;
  }
};

export const initialState: TodoListState = {
  todos: [],
  completedTodos: [],
  createTodoInputTitle: "",
};

export const useTodoListState = () => {
  const [state, dispatch] = useReducer(todoListReducer, initialState);
  return { state, dispatch };
};
