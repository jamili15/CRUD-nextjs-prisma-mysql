//components\AddTodo.tsx

import { create } from "@/_actions/actions";
import Form from "@/components/Form";

const AddTodo = () => {
  return (
    <Form action={create} className="w-1/2 m-auto">
      <div className="flex gap-2">
        <input
          type="text"
          name="input"
          placeholder="Add Todo..."
          className=" w-full max-w-xs border rounded border-black pl-2"
        />
        <button className=" bg-blue-500 rounded p-2">Add New Todo</button>
      </div>
    </Form>
  );
};

export default AddTodo;
