import React, { Component } from 'react';
import Loader from './loader';

const buttonstyling = {
    position:'absolute',
    top:'17vh',
    left:'45%',
    height:'3vh',
    width:'25vw',
    backgroundColor:'rgba(255, 255, 255,0.19)',
    color:'white',
    borderTopLeftRadius:'5em',
    borderBottomLeftRadius:'0',
    borderTopRightRadius:'5em',
    borderBottomRightRadius:'0',
    textAlign:'center',
}



const progresspercent={
    position:'absolute',
    top:'10%',
    left:'65%',
    color:'whitesmoke',
}


class ProgressBar extends Component{

        

    render()

            
    {   return(
        <div style={buttonstyling}>
     <Loader percent="40%"/> 
     <div style={progresspercent}>40%</div>
        </div>
    )
    }
}

export default ProgressBar; 
