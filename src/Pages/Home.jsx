import { useEffect, useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import {
  useGetTasksQuery,
  useRemoveTaskMutation,
  useUpdateTaskMutation,
} from "../Redux/TodoApi/TodoApi";
import { UserId } from "./Login";

const Home = () => {
  const { data: tasks = [], isLoading, error, refetch } = useGetTasksQuery(UserId);
  const [removeTask] = useRemoveTaskMutation();
  const [updateTask] = useUpdateTaskMutation();

  const DeleteTask = async (id) => {
    await removeTask(id);
  };

  const UpdateTask = async (id, status) => {
    await updateTask({ id, status });
  };

  console.log(tasks);

  const all = tasks.length;
  const active = tasks.filter((item) => item.status === true).length;
  const completed = all - active;

  return (
    <div className="bg-[#2b2b2b] p-[20px] my-10 mx-auto w-[45%] rounded-2xl">
      <div>
        <h1 className="text-3xl text-white">All Your Duty</h1>
        <div className="w-full h-[3px] rounded-2xl bg-[#ff4c4c] my-5"></div>
        {tasks.map((item) => {
          return (
            <div
              className="border-b border-white text-white p-2 flex items-top gap-x-3"
              key={item.id}
            >
              <BsFillTrashFill
                onClick={() => DeleteTask(item.id)}
                className="w-[40px] h-[40px] text-red-400 cursor-pointer"
              />
              <button
                onClick={() => UpdateTask(item.id, item.status)}
                className={
                  item.status
                    ? "btn btn-success w-[105px]"
                    : "btn btn-error w-[105px]"
                }
              >
                {item.status ? "Active" : "Completed"}
              </button>
              <span className="w-full break-words text-2xl">{item.title}</span>
            </div>
          );
        })}

        <div className=" text-[20px] mt-10">
          <div className="text-[#ff9f1c]">All Tasks : {all}</div>
          <div className="text-[#4caf50]">Active : {active}</div>
          <div className="text-[#ff6b6b]">Completed : {completed}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
