import React, { Component } from 'react';



class Manage extends Component{

    

    render()
    {   return(
        <button style={{
    position:'absolute',
    top:this.props.top,
    left:this.props.left,
    height:'3vh',
    width:'6vw',
    backgroundColor:'whitesmoke',
    color:'#EE00FF',
    borderTopLeftRadius:'3em',
    borderBottomLeftRadius:'3em',
    borderTopRightRadius:'3em',
    borderBottomRightRadius:'3em',
    textAlign:'center',
    boxShadow:'0.2em 0.2em 0.2em 0.2em rgba(0, 0, 0,0.2)',
    borderWidth:'0',
}}>
     {this.props.text}
        </button>
    )
    }
}

export default Manage; 
