import React, { createRef, useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const CreateTaskModal = ({ modal, toogle, save }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const nameInput = createRef();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "taskName") {
      setTaskName(value);
    } else {
      setDescription(value);
    }
  };

  const handleSave = () => {
    let taskObj = {};
    taskObj["Name"] = taskName;
    if (taskName === "") {
      document
        .querySelector(
          "body > div:nth-child(3) > div > div.modal.fade.show > div > div > div.modal-body > div > div:nth-child(1) > input"
        )
        .focus();
      return;
    }
    taskObj["Description"] = description;
    setDescription("");
    setTaskName("");
    save(taskObj);
  };
  return (
    <Modal isOpen={modal} toggle={toogle}>
      <ModalHeader toggle={toogle}>Create New Task</ModalHeader>
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
        <Button color="primary" type="submit" form="form1" onClick={handleSave}>
          Add
        </Button>{" "}
        <Button onClick={toogle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};
export default CreateTaskModal;
