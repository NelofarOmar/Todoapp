import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";
import { Card, CardText, CardTitle } from "reactstrap";

const TaskCard = ({ taskObj, index, deleteHandler, editHandler }) => {
  const handleEdit = () => {
    editHandler(taskObj, index);
  };

  const handleDelete = () => {
    deleteHandler(taskObj, index);
  };

  const colors = [
    {
      primaryColor: "#c014e4",
      secondaryColor: "#ECF3FC",
    },
    {
      primaryColor: "#F9D288",
      secondaryColor: "#FEFAF1",
    },
    {
      primaryColor: "#5DC250",
      secondaryColor: "#F2FAF1",
    },
    {
      primaryColor: "#F48687",
      secondaryColor: "#FDF1F1",
    },
    {
      primaryColor: "#B964F7",
      secondaryColor: "#F3F0FD",
    },
  ];

  return (
    <div className="card-wrapper">
      <Card
        body
        inverse
        style={{
          backgroundColor: colors[index % 5].primaryColor,
          borderColor: "#333",
        }}
      >
        <CardTitle tag="h5">{taskObj.Name}</CardTitle>
        <CardText className="card-text">{taskObj.Description}</CardText>
        <div className="card-btns">
          <Button
            variant="contained"
            onClick={handleEdit}
            endIcon={<EditIcon />}
          >
            Edit
          </Button>{" "}
          <Button
            onClick={handleDelete}
            color="error"
            variant="contained"
            endIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default TaskCard;
