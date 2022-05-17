import React, { useEffect, useState } from "react";
import CreateTaskModal from "./CreateTaskModal";
import ConfirmModal from "./ConfirmModal";
import TaskCard from "./TaskCard";
import EditTask from "./EditTask";

const ToDoList = () => {
  const [modal, setModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [index, setIndex] = useState(null);
  const [taskObj, setTaskObj] = useState(null);
  const toogle = () => {
    setModal(!modal);
  };
  const toogleConfirm = () => {
    setConfirmModal(!confirmModal);
  };
  const toogleEdit = () => {
    setEditModal(!editModal);
  };

  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem("taskList");
    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);

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
    saveToSource();
  };

  const deleteTask = (index) => {
    setConfirmModal(false);
    let temp = taskList;
    temp.splice(index, 1);
    setTaskList(temp);
    setTaskObj(null);
    setIndex(null);
    saveToSource();
  };

  const openEdit = (taskObj, index) => {
    console.log("at open " + JSON.stringify(taskObj));
    setTaskObj(taskObj);
    setIndex(index);
    toogleEdit();
    console.log(taskObj, index);
  };
  const updateTask = (task, index) => {
    setEditModal(false);
    let temp = taskList;
    temp.splice(index, 1);
    temp.push(task);
    setTaskList(temp);
    setTaskObj(null);
    saveToSource();
  };

  const saveToSource = () => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
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
            taskObj={task}
            index={index}
            editHandler={openEdit}
            deleteHandler={taskToDelete}
          />
        ))}
      </div>
      <CreateTaskModal toogle={toogle} modal={modal} save={saveTask} />
      <ConfirmModal
        toogle={toogleConfirm}
        modal={confirmModal}
        deleteHandler={deleteTask}
        index={index}
        taskObj={taskObj}
      />
      <EditTask
        toogle={toogleEdit}
        modal={editModal}
        editHandler={updateTask}
        index={index}
        taskObj={taskObj}
      />
    </>
  );
};

export default ToDoList;
