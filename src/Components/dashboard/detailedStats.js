import React, { Component } from "react";
import CircularProgressBar from "./CircularProgressBar";
const statsStyle = {
  padding: "10px",
  border: "1px solid rgba(0,0,0,0.161)",
  borderRadius: "5px",
  width: "400px",
  boxShadow: "2px 4px 20px rgba(0, 0, 0, 0.161)",
  borderRadius: "15px"
};

const statsTitle = {
  maxWidth: "250px",
  borderRadius: "5px",
  color: "white",
  background: "linear-gradient(168.44deg, #FFFFFF -146.39%, #00A2FF 141.5%)",
  textAlign: "center",
  borderRadius: "15px",
  padding: "15px",
  position: "relative",
  boxShadow: "2px 4px 20px rgba(0, 0, 0, 0.161)",
  display: "inline-block"
};

const statsTitleHeading = {
  textTransform: "uppercase",
  fontWeight: "100",
  fontSize: "45px",
  padding: "15px"
};

const statsTitleSubheading = {
  fontWeight: "100",
  fontSize: "18px",
  padding: "5px",
  lineHeight: "20px"
};

const statsBasicInfo = {
  padding: "10px 0px",
  fontSize: "22px",
  color: "#FF6666",
  textAlign: "left",
  lineHeight: "30px"
};

const statsActivities = {
  color: "black",
  textAlign: "left",
  fontSize: "20px",
  lineHeight: "30px",
  paddingLeft: "10px",
  height: "300px",
  width: "320px",
  paddingTop: "10px"
};
class Stats extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={statsStyle}>
        <div style={statsTitle}>
          <div style={statsTitleHeading}>Stats</div>
          <div style={statsTitleSubheading}>
            See your daily progress and history. Track your targets
          </div>
        </div>
        <div style={statsBasicInfo}>
          <div>Average Heart Rate : {this.props.avgHeartRate}</div>
          <div>Average Calories Lost : {this.props.caloriesLost} Cal</div>
          <div>
            Done better than {this.props.betterThanPercentage}% of your Friends
          </div>
        </div>
        <div style={statsActivities}>
          <div>Running: {this.props.runningData} Km</div>
          <div>Jogging: {this.props.joggingData} Km</div>
          <div>Walking: {this.props.walkingData} Km</div>
          <div>Steps: {this.props.totalSteps}</div>
          <button
            style={{
              boxShadow: "0 0 3px black",
              borderRadius: "25px",
              padding: "0px 10px",
              margin: "10px 0",
              cursor: "pointer",
              fontSize: "20px",
              backgroundColor: "white",
              top: "75%",
              position: "absolute",
              border: "0"
            }}
          >
            Sync With Fit
            <img
              src="/src/Components/dashboard/fit.png"
              alt="hello"
              style={{ width: " 20px", padding: "5px 5px 5px 25px" }}
            />
          </button>
          <CircularProgressBar
            todaysGoalCompletion={this.props.todaysGoalCompletion}
          />
        </div>
        <button
          style={{
            boxShadow: "0 0 3px black",
            borderRadius: "25px",
            padding: "0px 13px",
            margin: "10px 0",
            cursor: "pointer",
            fontSize: "20px",
            backgroundColor: "white",
            top: "85%",
            left: "3%",
            position: "absolute",
            border: "0"
          }}
        >
          Add Another Activity
        </button>
      </div>
    );
  }
}

export default Stats;
