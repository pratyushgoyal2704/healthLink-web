import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const styles = {
  avatar: {
    // position:'absolute',
    float:'left',
    top: 10+'%',
    left: 50+'%',
    transform: `translate(${-50+'%'}, ${0}px)`,
    width:100,
    height:100,
    backgroundColor: "rgb(252, 204, 204)",
    
  }, 
};  

function ImageAvatars(props) {
  const { classes } = props;
  return (
    <Grid container >
      {/* { console.log(5436463) } */}
      <Avatar src={props.avatar1Image} className={classes.avatar} />
    </Grid>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);