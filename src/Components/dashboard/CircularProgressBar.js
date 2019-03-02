import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";

// let circularProgressbarStyle = {};
const CircularProgressBar = props => {
  const circularProgressbarStyle = {
    width: "150px",
    float: "right",
    marginTop: "50px"
  };

  const progressbarText = {
    position: "absolute",
    left: "77%",
    top: "77%",
    transform: "translate(-50%,-50%)"
  };
  return (
    <div>
      <CircularProgress
        variant="static"
        value={props.todaysGoalCompletion}
        style={circularProgressbarStyle}
        color="secondary"
      />
      <Typography variant="h4" style={progressbarText}>
        {props.todaysGoalCompletion}%
      </Typography>

      <Typography
        variant="h4"
        style={{
          color: "#FF033F",
          position: "absolute",
          top: "53%",
          left: "73%",
          textAlign: "center",
          transform: "translate(-50%,-50%)",
          textTransform: "uppercase"
        }}
      >
        {"Daily Goal"}
      </Typography>
    </div>
  );
};

export default CircularProgressBar;
