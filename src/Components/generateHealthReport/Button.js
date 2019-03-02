import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

function ActionButton(props) {
  return (
    <div>
      <Button variant="contained" color="primary" onClick={props.handleClick}>
        {props.buttonTitle}
      </Button>
    </div>
  );
}

ActionButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ActionButton);
