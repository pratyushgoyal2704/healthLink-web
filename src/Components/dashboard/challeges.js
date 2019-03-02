import React, { Component } from "react";

class Challenges extends Component {
  render() {
    return (
      <div>
        <h1 style={{ fontSize: "48px", textTransform: "uppercase" }}>
          Challenges
        </h1>
        <div>
          <div
            style={{
              float: "left",
              width: "50%",
              textAlign: "center",
              fontSize: "24px",
              padding: "5px",
              boxSizing: "border-box"
            }}
          >
            Get a check-up at nearest IHL Kiosk
          </div>
          <div
            style={{
              float: "left",
              width: "50%",
              textAlign: "center",
              fontSize: "24px",
              padding: "5px",
              boxSizing: "border-box"
            }}
          >
            Completion
          </div>
        </div>
        <div>
          <div
            style={{
              float: "left",
              width: "50%",
              textAlign: "center",
              backgroundColor: "red"
            }}
          >
            Challenge #1
          </div>
          <div
            style={{
              float: "left",
              width: "50%",
              textAlign: "center",
              backgroundColor: "blue"
            }}
          >
            Random text
          </div>
        </div>
      </div>
    );
  }
}

export default Challenges;
