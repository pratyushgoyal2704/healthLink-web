import React, { Component } from "react"; // React and Frameworks
//import "./styles/sass/main.scss"; // Stylesheet (Import only Static Stylesheets here)
//import { BrowserRouter, Route } from "react-router-dom";
//import Home from "./Components/Home";
//import DashBoard from "./Components/DashBoard.js";
import Chart from "./Components/generateHealthReport/Graph";
//import SimpleSelect from "./Components/generateHealthReport/Menu";
// Apollo Setup
//import ApolloClient from "apollo-boost";
//import { ApolloProvider } from "react-apollo";

// Apollo Setup ( GraphQL Client )
// const client = new ApolloClient({
//   uri: "http://localhost:5050/graphql"
// });

// import './Styles/materialize.min.scss'  // Stylesheet (Import only Static Stylesheets here)
const testStyle = {
  width: "75%",
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)"
};
class App extends Component {
  render() {
    return (
      <div style={this.testStyle}>
        <Chart graphTitle="Calories vs Months" graphWidth="" graphHeight="" />
      </div>
    );
  }
}

export default App;
