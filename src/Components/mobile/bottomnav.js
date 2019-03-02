import React from "react";

var Home = {
  color: "white",
  textAlign: "center",
  display: "inline-block",
  padding: "3px"
};
function BottomNav(props) {
  return (
    <div>
      <div style={{ backgroundColor: "#FF033F" }}>
        <i class="fa fa-home" aria-hidden="true" style={Home} />
      </div>
      <div style={{ backgroundColor: "#FF033F" }}>
        <i class="fa fa-cutlery" aria-hidden="true" style={Home} />
      </div>
      <div style={{ backgroundColor: "#FF033F" }}>
        <i class="fa fa-area-chart" aria-hidden="true" />
      </div>
    </div>
  );
}

export default BottomNav;
