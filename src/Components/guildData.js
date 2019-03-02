import React, { Component } from "react";

//For Guild
import Guild from "./guild/Guild";
import Topbar from "./dashboard/topbar/topbar";
import Navbar from "./dashboard/navBar/navbar";

export default class guildData extends Component {
  render() {
    return (
      <div>
        <Topbar />
        <Navbar />
        <Guild
          guildMembers={[
            { id: "1", name: "Person 1", progress: [60, 45, 50, 100] },
            { id: "2", name: "Person 2", progress: [50, 25, 60, 40] },
            { id: "3", name: "Person 3", progress: [70, 100, 50, 60] }
            // { id: "3", name: "Person 3", progress: [70, 100, 50, 60] }
          ]}
        />
      </div>
    );
  }
}
