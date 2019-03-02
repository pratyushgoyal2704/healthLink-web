import React from "react";

var Boxstyle = {
  color: "white",
  background: "linear-gradient(168.44deg, #FFFFFF -146.39%, #00A2FF 141.5%)",
  textAlign: "center",
  borderRadius: "15px",
  padding: "15px",
  position: "relative",
  boxShadow: "2px 4px 20px rgba(0, 0, 0, 0.161)",
  display: "inline-block",
  top: "20px"
};
var BoxSize = {
  fontSize: "40px",
  textTransform: "uppercase",
  padding: "10px",
  fontFamily: "Roboto",
  position: "relative"
};

var Textthing = {
  position: "relative",
  padding: "10px",
  transform: "translate(-50%, -50%)",
  display: "inline-block",
  top: "40px",
  left: "15%",
  fontFamily: "Roboto",
  fontWeight: "400",
  color: "rgba(0, 0, 0, 0.6)"
};

var Swf = {
  padding: "0px 3px",
  boxShadow: "2px 4px 20px rgba(0, 0, 0, 0.161)",
  position: "relative",
  display: "inline-block",
  bottom: "80px",
  left: "516px",
  padding: "2px 8px",
  borderRadius: "40px",
  fontFamily: "Roboto",
  fontWeight: "400",
  fontSize: "15px",
  backgroundColor: "white",
  border: "0px",
  color: "rgba(0, 0, 0, 0.6)",
  fontWeight: "400"
};

var None = {
  backgroundColor: "#F929E4",
  borderRadius: "5px",
  float: "left",
  width: "50",
  padding: "5px 8px",
  width: "62px",
  margin: "8px 0"
};
var OutBox = {
  borderRadius: "40px",
  backgroundColor: "white",
  overflow: "auto",
  position: "relative",
  display: "inline-block",
  left: "25%",
  padding: "0px 3px",
  boxShadow: "2px 4px 20px rgba(0, 0, 0, 0.161)",
  top: "-8px"
};

var OutBoxText1 = {
  float: "left",
  padding: "3px",
  fontSize: "12px",
  color: "rgba(0, 0, 0, 0.6)",
  fontFamily: "Roboto",
  fontWeight: "400"
};

var OutBoxText2 = {
  float: "left",
  padding: "4px",
  fontSize: "12px",
  color: "#F929E4",
  fontFamily: "Roboto",
  fontWeight: "400"
};

var SyncedDevices = {
  position: "relative",
  display: "inline-block",
  top: "4px",
  left: "22%",
  fontFamily: "Roboto",
  fontWeight: "400",
  color: "rgba(0, 0, 0, 0.6)",
  lineHeight: "13px"
};
var DeviceName = {
  position: "relative",
  display: "inline-block",
  top: "36px",
  left: "7%",
  fontFamily: "Roboto",
  fontWeight: "400",
  textAlign: "center",
  color: "rgba(0, 0, 0, 0.6)",
  fontWeight: "400",
  fontSize: "12px",
  lineHeight: "13px"
};

function Box(props) {
  return (
    <div
      style={{
        overflow: "auto",
        padding: "0.5px 0.5px 1px 9px",
        boxShadow: "2px 4px 20px rgba(0, 0, 0, 0.161)",
        borderRadius: "15px"
      }}
    >
      <div style={Boxstyle}>
        <div style={BoxSize}>Profile</div>
        <div
          style={{
            position: "relative",
            textAlign: "center",
            fontFamily: "Roboto"
          }}
        >
          Manage Your Social Information
        </div>
      </div>
      <div style={Textthing}>
        <div>Name: Harry Potter</div>
        <div>Weight: 65kg</div>
        <div>Height: 162 cm</div>
      </div>

      <div style={SyncedDevices}>Synced Devices</div>
      <div style={DeviceName}>
        ASUS ZENWATCH 2 <br /> Pixel 3
      </div>

      <button style={Swf}>Sync with Fit</button>

      <div style={OutBox}>
        <div style={OutBoxText1}> Manage Friends</div>
        <div style={OutBoxText2}>ALL</div>
        <div style={None} />
      </div>
    </div>
  );
}

export default Box;
