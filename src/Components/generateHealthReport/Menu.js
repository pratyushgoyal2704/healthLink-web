import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

class SelectMenu extends React.Component {
  state = {
    age: "",
    name: "hai",
    labelWidth: 0
  };

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
    });
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    // console.log(event.target);
  };

  returnEvent() {
    console.log("Yo");
    return [event.target.name];
  }
  render() {
    const selectMenuText = this.props.selectMenuText;
    const selectMenuTitle = this.props.selectMenuTitle;
    // console.log(selectMenuText);
    const selectMenu = selectMenuText.map(item => {
      return <MenuItem value={item.value}>{item.text}</MenuItem>;
    });
    // console.log(selectMenuText[0].value);
    return (
      <FormControl variant="outlined">
        <InputLabel
          ref={ref => {
            this.InputLabelRef = ref;
          }}
          htmlFor="outlined-age-simple"
        >
          {selectMenuTitle};
        </InputLabel>
        <Select
          value={this.state.age}
          onChange={this.props.handleChange}
          input={
            <OutlinedInput
              labelWidth={this.state.labelWidth}
              name="age"
              id="outlined-age-simple"
            />
          }
        >
          {selectMenu}
        </Select>
      </FormControl>
    );
  }
}

export default withStyles(styles)(SelectMenu);
