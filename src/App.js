import React, { Component } from "react"; // React and Frameworks
//import "./styles/sass/main.scss"; // Stylesheet (Import only Static Stylesheets here)
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import Home from "./Components/Home";
//import DashBoard from "./Components/DashBoard.js";

//For Dashboard
import Topbar from "./Components/dashboard/topbar/topbar";
import Navbar from "./Components/dashboard/navBar/navbar";
import Box from "./Components/dashboard/basicStats";
import Stats from "./Components/dashboard/detailedStats";
import ChallengeBox from "./Components/dashboard/challenge box/challengebox";

//For Guild
import Guild from "./Components/guild/Guild";

import Chart from "./Components/generateHealthReport/Graph";
import SelectMenu from "./Components/generateHealthReport/Menu";
import ActionButton from "./Components/generateHealthReport/Button";
import Graph from "./Components/generateHealthReport/Graph";
import TaskAlert from "./Components/dashboard/taskAlert";
import NearbyEvents from "./Components/Community/NearbyEvents";
// import SimpleExpansionPanel from "./Components/mobile/guildMobile";
// import ChallengeBox from "./Components/dashboard/challeges";
// Apollo Setup
//import ApolloClient from "apollo-boost";
//import { ApolloProvider } from "react-apollo";
// import Box from "./Components/dashboard/stats";
// import BottomNav from "./Components/mobile/bottomnav";
// Apollo Setup ( GraphQL Client )
// const client = new ApolloClient({
//   uri: "http://localhost:5050/graphql"
// });
import Home from "./Components/Home";
import guildData from "./Components/guildData";
import "./styles/sass/main.scss";

// import './Styles/materialize.min.scss'  /s/ Stylesheet (Import only Static Stylesheets here)
const testStyle = {
  // width: "50%",
  // position: "absolute",
  // left: "50%",
  // top: "50%",
  // transform: "translate(-50%,-50%)"
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main className="main-content" style={{ overflow: "hidden" }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/guilds" component={guildData} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}
export default App;
