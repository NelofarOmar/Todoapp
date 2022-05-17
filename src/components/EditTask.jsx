import React, { createRef, useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const EditTask = ({ modal, toogle, editHandler, taskObj, index }) => {
  const [taskName, setTaskName] = useState(null);
  const [description, setDescription] = useState("");
  const setValues = () => {
    setTaskName(taskObj.Name);
    setDescription(taskObj.Description);
  };
  if (taskObj != null) {
    if (taskObj.Name !== taskName && taskObj.Description !== description) {
      setValues();
    }
  }
  if (
    (taskName === null || taskName === "") &&
    taskObj != null &&
    taskObj !== undefined
  ) {
    setValues();
  }

  const nameInput = createRef();
  console.log("at edit" + JSON.stringify(taskObj));
  console.log(taskName, description);
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "taskName") {
      setTaskName(value);
    } else {
      setDescription(value);
    }
  };

  const handleEdit = () => {
    let tempObj = {};
    tempObj["Name"] = taskName;
    if (taskName === "") {
      // nameInput.focus();
      document
        .querySelector(
          "body > div:nth-child(3) > div > div.modal.fade.show > div > div > div.modal-body > div > div:nth-child(1) > input"
        )
        .focus();
      return;
    }
    tempObj["Description"] = description;
    editHandler(tempObj, index);
    setDescription("");
    setTaskName("");
  };
  return (
    <Modal isOpen={modal} toggle={toogle}>
      <ModalHeader toggle={toogle}>Edit Task</ModalHeader>
      <ModalBody>
        <div>
          <div className="form-group">
            <label>Task Name</label>
            <input
              ref={nameInput}
              type="text"
              className="form-control"
              value={taskName}
              placeholder="Enter task title"
              onChange={handleChange}
              name="taskName"
              required
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              id=""
              rows="5"
              className="form-control"
              value={description}
              placeholder="Enter description of task"
              onChange={handleChange}
              name="taskDescription"
            ></textarea>
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleEdit}>
          Save
        </Button>{" "}
        <Button onClick={toogle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditTask;
