//components\DeleteTodo.tsx
"use client";

import { deleteTodo } from "@/_actions/actions";
import Form from "@/components/Form";
import { todoType } from "@/types/todoTypes";

const DeleteTodo = ({ todo }: { todo: todoType }) => {
  return (
    <Form action={deleteTodo}>
      <input type="hidden" name="inputId" value={todo.id} />
      <button type="submit" className="bg-red-500 p-1 rounded">
        Delete
      </button>
    </Form>
  );
};

export default DeleteTodo;
