//components\EditTodo.tsx
"use client";

import Form from "@/components/Form";
import { useState } from "react";
import { todoType } from "@/types/todoTypes";
import { edit } from "@/_actions/actions";

const EditTodo = ({ todo }: { todo: todoType }) => {
  const [editTodo, setEditTodo] = useState(false);

  const handleEdit = () => {
    setEditTodo(!editTodo);
  };

  const handleSubmit = () => {
    setEditTodo(false);
  };
  return (
    <div className="flex gap-5 items-center">
      <button onClick={handleEdit} className="bg-green-500 p-1 rounded">
        {editTodo ? "cancel" : "edit"}
      </button>

      {editTodo ? (
        <Form action={edit} onSubmit={handleSubmit}>
          <input name="inputId" value={todo.id} type="hidden" />

          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Edit Todo..."
              name="newTitle"
              className="w-full max-w-xs mr-2"
            />
            <button type="submit" className="bg-blue-500 p-1 rounded">
              Save
            </button>
          </div>
        </Form>
      ) : null}
    </div>
  );
};

export default EditTodo;
