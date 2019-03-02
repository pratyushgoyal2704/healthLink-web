import React, { Component } from 'react';
import PercentageBar from './percentagebar';

const buttonstyling = {
    position:'relative',
    top:'0.5vh',
    left:'3%',
    height:'2vh',
    width:'15vw',
    backgroundColor:'white',
    color:'red',
    borderTopLeftRadius:'5em',
    borderBottomLeftRadius:'0',
    borderTopRightRadius:'5em',
    borderBottomRightRadius:'0',
    textAlign:'center',
}

class Loader extends Component{

    

    render()
    {   return(
        <div style={buttonstyling}>
     <PercentageBar width={this.props.percent}/>
     
        </div>
    )
    }
}

export default Loader; 
