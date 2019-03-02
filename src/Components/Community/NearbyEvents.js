import React, { Component } from "react";

const statsStyle = {
  padding: "10px",
  width: "100%"
};

const NearbyEvents__heading = {
  fontSize: "45px",
  border: "1px solid rgba(0,0,0,0.5)",
  borderRadius: "20px",
  padding: "7.5px 100px"
};

const NearbyEvents__card = {
  width: "33%",
  boxSizing: "border-box",
  borderRadius: "5px",
  border: "0.5px solid rgba(0,0,0,0.5)",
  float: "left",
  backgroundImage: "linear-gradient(white,red)"
};
class NearbyEvents extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{}}>
        <div style={statsStyle}>
          <div style={NearbyEvents__heading}>
            <i class="fas fa-map-pin" style={{ padding: "0 3px" }} /> Nearby
            Events
          </div>
          <div style={{ width: "100%" }}>
            <div style={NearbyEvents__card}>hello</div>
            <div style={NearbyEvents__card}>hello</div>
            <div style={NearbyEvents__card}>hello</div>
          </div>
        </div>
      </div>
    );
  }
}

export default NearbyEvents;
