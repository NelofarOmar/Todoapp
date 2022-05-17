import React, { useState } from "react";
import CreateTaskModal from "./CreateTaskModal";
import TaskCard from "./TaskCard";
import ConfirmModal from "./ConfirmModal";

const ToDoList = () => {
  const [modal, setModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [index, setIndex] = useState(null);
  const [taskObj, setTaskObj] = useState(null);

  const toogle = () => {
    setModal(!modal);
  };

  const toogleConfirm = () => {
    setConfirmModal(!confirmModal);
  };

  const [taskList, setTaskList] = useState([]);

  const taskToDelete = (taskObj, index) => {
    setTaskObj(taskObj);
    setIndex(index);
    toogleConfirm();
  };

  const saveTask = (taskObj) => {
    setModal(false);
    let temp = taskList;
    temp.push(taskObj);
    setTaskList(temp);
    console.log(JSON.stringify(taskList));
  };

  const deleteTask = (index) => {
    setConfirmModal(false);
    let temp = taskList;
    temp.splice(index, 1);
    setTaskList(temp);
    console.log(JSON.stringify(taskList));
    setTaskObj(null);
    setIndex(null);
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
          <TaskCard
            key={index}
            deleteHandler={taskToDelete}
            taskObj={task}
            index={index}
          />
        ))}
      </div>
      <ConfirmModal
        toogle={toogleConfirm}
        modal={confirmModal}
        deleteHandler={deleteTask}
        index={index}
        taskObj={taskObj}
      />
      <CreateTaskModal toogle={toogle} modal={modal} save={saveTask} />
    </>
  );
};

export default ToDoList;
