import React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const EditTask = ({ modal, toogle, deleteHandler, index, taskObj }) => {
  const handleDelete = () => {
    deleteHandler(index);
  };

  return (
    <Modal isOpen={modal} toggle={toogle}>
      <ModalHeader toggle={toogle}>Confirm Task Delete</ModalHeader>
      <ModalBody>
        <p>Are You sure you want to delete this task?</p>
        <h3>
          <strong>{taskObj?.Name}</strong>
        </h3>
        <p>{taskObj?.Description}</p>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleDelete}>
          Yes
        </Button>{" "}
        <Button onClick={toogle}>No</Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditTask;
