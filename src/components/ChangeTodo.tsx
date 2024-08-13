//components\ChangeTodo.tsx

import { todoStatus } from "@/_actions/actions";
import Form from "@/components/Form";
import { todoType } from "@/types/todoTypes";

const ChangeTodo = ({ todo }: { todo: todoType }) => {
  return (
    <Form action={todoStatus}>
      <input
        name="inputId"
        value={todo.id}
        className="border-gray-700 border"
        type="hidden"
      />
      <button type="submit" className="bg-blue-500 p-1 rounded">
        Done
      </button>
    </Form>
  );
};

export default ChangeTodo;
