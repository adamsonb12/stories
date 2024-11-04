import { useTodoListState } from "./state";
import { PrimaryButton } from "../../@common/buttons/primary";
import { TextInput } from "../../@common/fields/text-input";
import { Field } from "../../@common/fields/field";
import { A11y } from "../../@common/buttons/a11y";

export const TodoList = () => {
  const { state, dispatch } = useTodoListState();

  return (
    <div className="grid gap-4">
      <h1 className="text-2xl font-bold">Todo List</h1>
      <Field label="Add a todo">
        <TextInput value={state.createTodoInputTitle} onChange={(e) => dispatch({ type: "EDIT_CREATE_TODO_INPUT_TITLE", payload: e.target.value })} />
      </Field>
      <PrimaryButton onClick={() => {
        if (state.createTodoInputTitle.trim()) {
          dispatch({ type: "ADD_TODO", payload: state.createTodoInputTitle.trim() });
        }
      }}>Add todo</PrimaryButton>

      {state.todos.map((todo) => (
        <div key={todo.id} className="flex gap-4 items-center">
          <p>{todo.title}</p>
          <A11y className="text-red-500" onClick={() => dispatch({ type: "COMPLETE_TODO", payload: todo.id })}>Complete</A11y>
        </div>
      ))}

      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-bold">Completed</h2>
        {state.completedTodos.length === 0 && <p>No completed todos</p>}

        {state.completedTodos.map((todo) => (
          <div key={todo.id}>{todo.title}</div>
        ))}
      </div>
    </div>
  );
};
