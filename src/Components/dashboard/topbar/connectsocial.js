import React, { Component } from 'react';


const buttonstyling = {
    position:'absolute',
    top:'11%',
    left:'43%',
    height:'2.5vh',
    width:'7vw',
    backgroundColor:'rgba(255, 255, 255,1)',
    color:'whitesmoke',
    borderTopLeftRadius:'3em',
    borderBottomLeftRadius:'3em',
    borderTopRightRadius:'3em',
    borderBottomRightRadius:'3em',
   
    textAlign:'left',
    
}

    const fontlogolinkedin={
        position:'relative',
        top:'-3%',
        left:'50%',
        color:'rgb(67, 139, 211)',
        fontSize:'1.45em',
    }

class ConnectSocial extends Component{

    

    render()
    {   return(
        <div style={buttonstyling}>
            
        <i class="fab fa-linkedin" style={fontlogolinkedin}></i>     
        </div>
    )
    }
}

export default ConnectSocial; 
