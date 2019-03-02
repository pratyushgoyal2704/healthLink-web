import React, { Component } from "react";
import Challenges from "./challenges";

const challengebox = {
  backgroundColor: "white",
  height: "30vh",
  width: "40vw",
  position: "absolute",
  left: "18%",
  top: "42.5%",
  borderRadius: "2.5em",
  border: "0.05em solid rgba(0,0,0,0.187)",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
};

const challengeHead = {
  textAlign: "center",
  paddingTop: "1%",
  fontSize: "1.5em",
  color: "#F60EDF"
};

class ChallengeBox extends Component {
  state = {
    Challenges: [
      { challenge: "Complete 2500 steps", exp: 20, id: 1 },
      { challenge: "Complete 5000 steps", exp: 30, id: 2 },
      { challenge: "Complete 10000 steps", exp: 40, id: 3 },
      { challenge: "Consume 2000 Cal", exp: 40, id: 4 },
      { challenge: "Drink 8 glasses water", exp: 20, id: 5 },
      { challenge: "Sleep 6 hours", exp: 20, id: 6 }
    ]
  };

  render() {
    return (
      <div style={challengebox}>
        <p style={challengeHead}>
          <div style={{}}>CHALLENGES</div>
        </p>
        <Challenges
          left="0%"
          top="12%"
          per="30"
          challenges={this.state.Challenges[0]}
        />
        <Challenges
          left="0%"
          top="38%"
          per="40"
          challenges={this.state.Challenges[1]}
        />
        <Challenges
          left="0%"
          top="61%"
          per="50"
          challenges={this.state.Challenges[2]}
        />
        <Challenges
          left="50%"
          top="12%"
          per="67"
          challenges={this.state.Challenges[3]}
        />
        <Challenges
          left="50%"
          top="38%"
          per="80"
          challenges={this.state.Challenges[4]}
        />
        <Challenges
          left="50%"
          top="61%"
          per="100"
          challenges={this.state.Challenges[5]}
        />
      </div>
    );
  }
}

export default ChallengeBox;
