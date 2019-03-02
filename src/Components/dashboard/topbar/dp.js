import React, { Component } from 'react';


const dpstyling={

    height:'10vh',
    width:'5vw',
    position:'absolute',
    top:'5%',
    left:'8%',
    backgroundColor:'red',
    border:'0.2em solid white',
    borderRadius:'50%',
    boxShadow: '2rem 2rem 2rem #888888',
boxShadow:'0.2em 0.2em 0.2em 0.2em rgba(0, 0, 0,0.2)',
zIndex:'1',

}

class Dp extends Component{
   


    render()
    {   return(
        <div style={dpstyling}>

        </div>
    )
    }
}

export default Dp; 
