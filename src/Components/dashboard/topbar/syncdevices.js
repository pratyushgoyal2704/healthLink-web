import React, { Component } from "react";
import ConnectSocial from "./connectsocial";

const buttonstyling = {
  position: "absolute",
  top: "8.5%",
  left: "84%",
  height: "3.5vh",
  width: "13vw",
  backgroundColor: "rgba(255, 255, 255,0.19)",
  color: "whitesmoke",
  borderTopLeftRadius: "3em",
  borderBottomLeftRadius: "3em",
  borderTopRightRadius: "3em",
  borderBottomRightRadius: "3em",
  boxShadow: "0.2em 0.2em 0.2em 0.2em rgba(0, 0, 0,0.2)",
  textAlign: "left"
};

const fontlogomobile = {
  position: "relative",
  top: "10%",
  left: "5%",
  color: "white",
  fontSize: "1.5em"
};

const fontlogotwitter = {
  position: "relative",
  top: "10%",
  left: "10%",
  color: "white",
  fontSize: "1.5em"
};
const fontlogofacebook = {
  position: "relative",
  top: "10%",
  left: "15%",
  color: "white",
  fontSize: "1.5em"
};

class SyncDevices extends Component {
  render() {
    return (
      <div style={buttonstyling}>
        <i class="fas fa-mobile" style={fontlogomobile} />
        <i class="fab fa-twitter" style={fontlogotwitter} />
        <i class="fab fa-facebook-f" style={fontlogofacebook} />
        <ConnectSocial />
      </div>
    );
  }
}

export default SyncDevices;
