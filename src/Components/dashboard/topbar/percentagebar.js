import React, { Component } from 'react';



class PercentageBar extends Component{

    

    render()
    {   return(
        <div style={{
    position:'relative',
    top:'0.5vh',
    left:'3%',
    height:'1vh',
    width:this.props.width,
    backgroundColor:'red',
    borderTopLeftRadius:'2em',
    borderBottomLeftRadius:'2em',
    borderTopRightRadius:'2em',
    borderBottomRightRadius:'2em',
    color:'red',

    textAlign:'center',
}}>
     
        </div>
    )
    }
}

export default PercentageBar; 
