import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

const percentage={
    position:'absolute',
    left:'7.5%',
    top:'36%',
    padding:'0%',
    color:'black',
    fontSize:'0.75em',
}

var x;


class CircularStatic extends React.Component {
  state = {
    completed: 0,
  };
  



  componentDidMount() {
    this.timer = setInterval(this.progress, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

 

  
  render() {
    var x=this.props.percent;
    console.log(x);
    var color;
    if(x<=30)
    {
      color="red";
    }

    else if(x<=50){
      color="blue";
    }

    else if(x<=80){
      color="#3ac954";
    }

    else if(x<=100){
      color="#00ff21";
    }

    


    const { classes } = this.props;
    return (
      <div>
      <div>
        <CircularProgress className={classes.progress} variant="static" value={this.props.percent} style={{position:'absolute',top:'-8%',color:color}} /></div>
      <div style={percentage}>{this.props.percent}%</div> 
     
      </div>
    );
  }
}

CircularStatic.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CircularStatic);
