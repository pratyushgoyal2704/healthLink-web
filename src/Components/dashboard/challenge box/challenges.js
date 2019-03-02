import React, { Component } from "react";
import CircularStatic from "./challengeprogress";

const texty = {
  position: "absolute",
  top: "30%",
  left: "20%",
  color: "black"
};

class Challenges extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "white",
          height: "8vh",
          width: "20vw",
          position: "absolute",
          top: this.props.top,
          left: this.props.left,
          border: "0.025em solid rgba(0,0,0,0.187)"
        }}
      >
        <CircularStatic percent={this.props.per} />
        <div style={texty}>{this.props.challenges.challenge}</div>
      </div>
    );
  }
}

export default Challenges;
