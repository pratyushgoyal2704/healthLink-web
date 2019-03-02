import React, { Component } from "react";

//For Dashboard
import Topbar from "./dashboard/topbar/topbar";
import Navbar from "./dashboard/navBar/navbar";
import Box from "./dashboard/basicStats";
import Stats from "./dashboard/detailedStats";
import ChallengeBox from "./dashboard/challenge box/challengebox";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        {/* <MastHead /> */}
        <Topbar />
        <Navbar />
        <div
          style={{
            width: "40%",
            position: "absolute",
            top: "30%",
            left: "30%"
          }}
        >
          <Box />
        </div>
        <div style={{ position: "absolute", top: "50%", left: "30%" }}>
          <ChallengeBox />
        </div>
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "73%"
          }}
        >
          <Stats todaysGoalCompletion="60" />
        </div>
      </div>
    );
  }
}
