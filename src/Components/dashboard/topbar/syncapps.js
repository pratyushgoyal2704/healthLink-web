import React, { Component } from 'react';


const buttonstyling = {
    position:'absolute',
    top:'7%',
    left:'75%',
    height:'3.5vh',
    width:'13vw',
    backgroundColor:'rgba(255, 255, 255,0.19)',
    color:'whitesmoke',
    borderTopLeftRadius:'3em',
    borderBottomLeftRadius:'3em',
    borderTopRightRadius:'3em',
    borderBottomRightRadius:'3em',
    
    textAlign:'left',
    
}

    const fontlogogoogle={
        color:'blue',
        padding:'10%',
       
    }
    
    const styling={
        position:'absolute',
        height:'2.4vh',
        width:'1.2vw',
        top:'15%',
        left:'45%',
        backgroundColor:'white',
        borderRadius:'50%',
    }

    const fitbit={
        position:'absolute',
        top:'2.5%',
        left:'57%',
        height:'3vh',
        width:'1.5vw',
        borderRadius:'50%',
        
        
       
   
    }
class SyncApps extends Component{

    

    render()
    {   return(
        <div style={buttonstyling}>
    <p style={{paddingLeft:'1.5%'}}> Syncing from</p>
     <div style={styling}><i className="fab fa-google" style={fontlogogoogle}></i></div>
        <img src="../../src/res/logo/fit.png" style={fitbit}/>
        </div>
    )
    }
}

export default SyncApps; 
