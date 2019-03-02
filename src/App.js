import React, { Component } from "react"; // React and Frameworks
//import "./styles/sass/main.scss"; // Stylesheet (Import only Static Stylesheets here)
//import { BrowserRouter, Route } from "react-router-dom";
//import Home from "./Components/Home";
//import DashBoard from "./Components/DashBoard.js";
import Chart from "./Components/generateHealthReport/Graph";
import SelectMenu from "./Components/generateHealthReport/Menu";
import ActionButton from "./Components/generateHealthReport/Button";
import Graph from "./Components/generateHealthReport/Graph";
import TaskAlert from "./Components/dashboard/taskAlert";
import Stats from "./Components/dashboard/stats";
import NearbyEvents from "./Components/Community/NearbyEvents";
// Apollo Setup
//import ApolloClient from "apollo-boost";
//import { ApolloProvider } from "react-apollo";

// Apollo Setup ( GraphQL Client )
// const client = new ApolloClient({
//   uri: "http://localhost:5050/graphql"
// });

// import './Styles/materialize.min.scss'  /s/ Stylesheet (Import only Static Stylesheets here)
const testStyle = {
  textAlign: "center",
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)"
};
class App extends Component {
  render() {
    // console.log(this.state);
    return (
      <div style={testStyle}>
        <Graph
          chartTitle="Colories vs Days"
          graphWidth="800px"
          graphHeight="500px"
        />
      </div>
    );
  }
}

export default App;
