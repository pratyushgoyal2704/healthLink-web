import React, { Component } from "react";
import Button from "@material-ui/core/Button";
const alertStyle = {
  boxShadow: "0px 0px 15px grey",
  border: "1px solid grey",
  borderRadius: "10px",
  textAlign: "left",
  padding: "5px",
  maxWidth: "300px"
};

const headerStyle = {
  padding: "5px",
  textTransform: "uppercase",
  fontSize: "12px"
};

const alertTitle = {
  fontSize: "20px",
  padding: "10px 3px",
  border: "0.5px solid grey",
  borderRight: "0px",
  borderLeft: "0px"
};

const alertInfo = {
  padding: "5px",
  width: "65%"
};

const alertButtonGroup = {
  textAlign: "right"
};

const alertButton = {
  margin: "3px"
};

function TaskAlert(props) {
  return (
    <div style={alertStyle}>
      <div style={headerStyle}>Task Alert </div>
      <div>
        <div style={alertTitle}>{props.taskMaker} sent you a new task. </div>
        <div style={alertInfo}>{props.taskInfo}</div>

        <div style={alertButtonGroup}>
          <Button variant="outlined" color="primary" style={alertButton}>
            Compete
          </Button>
          <Button variant="outlined" color="primary" style={alertButton}>
            Dismiss
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TaskAlert;
