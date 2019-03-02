import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ImageAvatars from './Avatar';
import ProgressBar from './ProgressBar';

const styles = {
  card: {
    // position: 'absolute',
    width: 17+'%',
    height: 50+'%',
    marginTop:25+'vh',
    marginLeft:10,
    float:'left',
    // left: 50+'%',
    // transform: `translate(${-50+'%'}, ${-50+'%'})`,
    minHeight: 350
}
};
 
const testStyle={
    marginTop : "30%"
  }

 

function SimpleCard(props) {
  const { classes } = props;

  return (
   
    <Card className={classes.card}>
      <CardContent>
        <ImageAvatars avatar1Image={props.avatarImage}/>
        <div style={{textAlign : "center", paddingTop :"10px"}}>
        Name : {props.name}
        </div>
        <div style={testStyle}>
        <ProgressBar progress1={props.progress}/>
        
        </div>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
