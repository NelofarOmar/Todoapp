import React, { useState } from "react";
import CreateTaskModal from "./CreateTaskModal";
import TaskCard from "./TaskCard";

const ToDoList = () => {
  const [modal, setModal] = useState(false);
  const toogle = () => {
    setModal(!modal);
  };

  const [taskList, setTaskList] = useState([]);

  const saveTask = (taskObj) => {
    setModal(false);
    let temp = taskList;
    temp.push(taskObj);
    setTaskList(temp);
    console.log(JSON.stringify(taskList));
  };

  return (
    <>
      <div className="header text-center ">
        <h1>To Do List</h1>
        <button className="btn btn-primary mt-2" onClick={toogle}>
          Add Task
        </button>
      </div>
      <div className="task-container">
        {taskList.map((task, index) => (
          <TaskCard key={index} taskObj={task} index={index} />
        ))}
      </div>
      <CreateTaskModal toogle={toogle} modal={modal} save={saveTask} />
    </>
  );
};

export default ToDoList;
