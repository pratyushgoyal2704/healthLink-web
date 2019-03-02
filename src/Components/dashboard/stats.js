import React, { Component } from "react";
import CircularProgressBar from "./CircularProgressBar";
const statsStyle = {
  padding: "10px",
  border: "1px solid gray",
  borderRadius: "5px",
  width: "400px",
  boxShadow: "0px 0px 10px rgba(0,0,0)"
};

const statsTitle = {
  backgroundColor: "#6FA2FF",
  maxWidth: "250px",
  color: "white",
  borderRadius: "5px"
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
          <div>Average Heart Rate : 98</div>
          <div>Average Calories Lost : 3000 Cal</div>
          <div>Done better than 90% of your Friends</div>
        </div>
        <div style={statsActivities}>
          <div>Running: 1.5 Km</div>
          <div>Jogging: 2.7 Km</div>
          <div>Walking: 1.67 Km</div>
          <div>Steps: 17,764</div>
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
          <CircularProgressBar todaysGoalCompletion="75" />
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
