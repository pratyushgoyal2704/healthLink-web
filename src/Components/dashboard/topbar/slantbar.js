import React, { Component } from 'react';


const slantbarstyling={

    height:'24vh',
    width:'8vw',
    position:'absolute',
    top:'0%',
    left:'4%',
    backgroundColor:'#00A2FF',
    boxShadow: '2rem 2rem 2rem #888888',
clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
boxShadow:'0.2em 0.2em 0.2em 0.2em rgba(0, 0, 0,0.2)',

}

class Slantbar extends Component{
   


    render()
    {   return(
        <div style={slantbarstyling}>

        </div>
    )
    }
}

export default Slantbar; 
