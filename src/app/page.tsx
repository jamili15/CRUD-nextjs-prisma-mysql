//app/page.tsx

import AddTodo from "@/components/AddTodo";
import Todo from "@/components/Todo";
import prisma from "@/lib/db";

const Home = async () => {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isCompleted: false,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  console.log("DATA", data);
  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      {/* <h1 className=" text-3xl font-extrabold mb-5">
        Next.js 14 Todo Server Actions
      </h1> */}

      <div className="flex justify-center flex-col items-center w-[1000px] ">
        <AddTodo />
        <div className=" flex flex-col gap-5 items-center justify-center mt-10 w-full">
          {data.map((todo: any) => (
            <div className="w-[75%] bg-slate-200 shadow-xl" key={todo.id}>
              <div className="card-body">
                <Todo todo={todo} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
