import React from "react";
import PropTypes from "prop-types";
import { withStyles, createStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

class ProgressBar extends React.Component {
  state = {
    completed: []
  };

  componentDidMount() {
    // console.log(" passed prop: ", this.props.progress1);
    let something = this.props.progress1;
    this.setState({
      completed: something
    });

    // console.log(this.state.completed);
  }

  componentDidUpdate() {
    // console.log("state: ", this.state);
  }
  icon = {
    color: "green",
    // height: 1.5 + 'vh',
    marginTop: 13 + "%",
    fontSize: 1.2 + "rem ",
    textAlign: "center",
    // marginLeft: 50+'%',
    // transform: `translate(${-50+'%'}, ${0}px)`,

    borderRadius: 1000,
    borderStyle: "solid",
    borderColor: "green"
  };

  barstyle = {
    backgroundColor: "rgb(249, 229, 229)",
    borderRadius: 1000
  };

  multibars = this.props.progress1.map(completed => {
    if (completed == 100) {
      return (
        <div style={this.icon}>
          <i class="fas fa-check" />
        </div>
      );
    }
    // } else console.log("completed: ", completed);
    return (
      <div style={this.barstyle}>
        <div
          style={{
            width: completed + "%",
            backgroundColor: "red",
            height: "10px",
            height: 1.5 + "vh",
            marginTop: 13 + "%",
            backgroundColor: "rgb(249, 164, 164)",
            borderRadius: 1000
          }}
        />
      </div>
    );
  });

  render() {
    // const { classes } = this.props;
    return (
      <div>
        {this.multibars}
        {/* {this.abs} */}
      </div>
    );
  }
}

// ProgressBar.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default ProgressBar;
