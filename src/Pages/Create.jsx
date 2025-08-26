import { use, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddTaskMutation } from "../Redux/TodoApi/TodoApi";

const Create = () => {
  const [task, setTask] = useState("");
  const navigate = useNavigate();
  const [CreateTask] = useAddTaskMutation();

  console.log(task);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (task.trim() === "") return;
          CreateTask({
            title: task,
            status: true,
            userId: localStorage.getItem("userId"),
          });
          navigate(-1);
        }}
        className="bg-[#2b2b2b] rounded-2xl p-[20px] my-10 mx-auto w-[45%]"
        action="#"
        method="post"
      >
        <label className="text-2xl text-white block mb-3" htmlFor="text">
          Add Task Item:
        </label>
        <textarea
          onChange={(e) => setTask(e.target.value)}
          className="w-full block text-white bg-[#777676] border-white border-2 p-2 rounded-[8px] min-h-[300px]"
          id="text"
          name="text"
        />
        <button className="btn btn-success my-1" type="submit">
          Add
        </button>
      </form>
    </>
  );
};

export default Create;
