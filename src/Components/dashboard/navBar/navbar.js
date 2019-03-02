import React, { Component } from "react";
import "./mergeLater.scss";
import { Link } from "react-router-dom";
// import manImage from "./img/man.png";
// import guildImage from "./img/guild.png";
// import communityImage from "./img/community.png";
// import reportImage from "./img/report.png";

// import manImageInv from "./img/maninverted.png";
// import guildImageInv from "./img/guildinverted.png";
// import communityImageInv from "./img/communityinverted.png";
// import reportImageInv from "./img/reportinverted.png";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <div className="navbar-button navPad">
            <Link to="/">
              <i className="fas fa-chart-line fa-5x" />
              <div className="navText">DASH</div>
            </Link>
          </div>
          <div className="navbar-button navPad">
            <Link to="/guilds">
              <i className="fas fa-users fa-5x" />
              <div className="navText">GUILDS</div>
            </Link>
          </div>
          <div className="navbar-button navPad">
            <div>
              <i className="fas fa-user-friends fa-5x" />
              <div className="navText">COMMUNITY</div>
            </div>
          </div>
          <div className="navbar-button navPad">
            <i className="fas fa-poll fa-5x" />
            <div className="navText">REPORTS</div>
          </div>
          <div className="navbar-button navPad">
            <i className="fas fa-desktop fa-5x" />
            <div className="navText">KIOSK</div>
          </div>
        </div>
      </div>
    );
  }
}

// import React, { Component } from "react";
// import "./style.css";
// import Navbar from "./navbar";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Navbar />
//       </div>
//     );
//   }
// }

// export default App;
