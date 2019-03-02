import React, { Component } from "react";

function GuildTitle(props) {
  return (
    <div
      style={{
        display: "inline-block",
        position: "relative",
        fontSize: "80px",
        textTransform: "uppercase",
        left: "50%",
        top: "60px",
        fontWeight: "100",
        transform: "translate(-50%,0%)"
      }}
    >
        {props.guildName}

      <i
        class="fas fa-user-plus"
        style={{
          position: "absolute",
          right: "-90%",
          fontSize: "40px",
          cursor: "pointer"
        }}
      />
    </div>
  );
}

export default GuildTitle;
