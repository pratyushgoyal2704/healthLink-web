import React, { Component } from "react"; // React and Frameworks
//import "./styles/sass/main.scss"; // Stylesheet (Import only Static Stylesheets here)
import { BrowserRouter, Route } from "react-router-dom";
//import Home from "./Components/Home";
//import DashBoard from "./Components/DashBoard.js";

//For Dashboard
import Topbar from "./Components/dashboard/topbar/topbar";
import Navbar from "./Components/dashboard/navBar/navbar";
import Box from "./Components/dashboard/basicStats";
import Stats from "./Components/dashboard/detailedStats";
import ChallengeBox from "./Components/dashboard/challenge box/challengebox";

import Chart from "./Components/generateHealthReport/Graph";
import SelectMenu from "./Components/generateHealthReport/Menu";
import ActionButton from "./Components/generateHealthReport/Button";
import Graph from "./Components/generateHealthReport/Graph";
import TaskAlert from "./Components/dashboard/taskAlert";
import NearbyEvents from "./Components/Community/NearbyEvents";
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
      <div style={testStyle}>
        <Topbar />
        <Navbar />
        <div
          style={{
            width: "40%",
            position: "absolute",
            top: "30%",
            left: "30%"
          }}
        >
          <Box />
        </div>
        <div style={{ position: "absolute", top: "50%", left: "30%" }}>
          <ChallengeBox />
        </div>
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "73%"
          }}
        >
          <Stats todaysGoalCompletion="60" />
        </div>
      </div>
    );
  }
}
export default App;
