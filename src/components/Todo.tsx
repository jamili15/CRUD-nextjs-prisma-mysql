//components\Todo.tsx
import ChangeTodo from "./ChangeTodo";
import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";
import { todoType } from "@/types/todoTypes";

const Todo = ({ todo }: { todo: todoType }) => {
  const todoStyle = {
    textDecoration: todo.isCompleted === true ? "line-through" : "none",
    opacity: todo.isCompleted === true ? 0.5 : 1,
  };

  return (
    <div
      className="w-full flex items-center justify-between py-3 px-20 rounded-2xl"
      style={todoStyle}
    >
      <h2 className="card-title">{todo.title}</h2>
      <div className="flex items-center gap-5">
        <ChangeTodo todo={todo} />
        <EditTodo todo={todo} />
        <DeleteTodo todo={todo} />
      </div>
    </div>
  );
};

export default Todo;
