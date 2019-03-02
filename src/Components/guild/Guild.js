import React, { Component } from "react";
import SimpleCard from "./Card";
import GuildTitle from "./guildTitle";
import GuildTable from "./guildRank";

const cards = {
  position: "relative",
  top: "-75px",
  left: "75%",
  transform: "translateX(-55%)"
};

class Guild extends Component {
  guildMembers = this.props.guildMembers;
  render() {
    console.log(this.props.guildMembers);

    const loadGuildMembers = this.guildMembers.map(member => {
      return (
        <SimpleCard
          avatarImage={"../../src/images/signup_male.png"}
          name={member.name}
          progress={member.progress}
        />
      );
    });
    console.log(loadGuildMembers);
    return (
      <div className="">
        <GuildTitle guildName="Cardio Crux" />
        <div style={cards}>{loadGuildMembers}</div>
      </div>
    );
  }
}

export default Guild;
