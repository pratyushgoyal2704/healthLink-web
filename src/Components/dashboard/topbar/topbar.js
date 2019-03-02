import React, { Component } from 'react';
import Slantbar from './slantbar';
import Manage from './manage';
import ProgressBar from './progressbar';
import SyncApps from './syncapps';
import SyncDevices from './syncdevices';
import Dp from './dp'

const topbarstyling={
height:'20vh',
width:'100vw',
backgroundColor:'#8D00FF',
     
}

const fontlogoheart ={
fontSize:'2.5em',
color:'white',
position:'absolute',
top:'7%',
left:'20%',
opacity:'0.8',
}

const fontlogorunning ={
    fontSize:'2.5em',
    color:'white',
    position:'absolute',
    top:'7%',
    left:'16%',
    opacity:'0.8'
    }

    const profileName={
        position:'absolute',
        top:'8%',
        left:'35%',
        color:'white',
        fontSize:'2em',
    }

class Topbar extends Component{


    render()
    {   return(
        <div>
        <div style={topbarstyling}>
            <Dp/>
            <div style={profileName}>ADITYA SHARMA</div>
            <Manage left="25%" top="8%" text="Titles"/>
            <i className="fas fa-heartbeat" style={fontlogoheart}></i>
            <i class="fas fa-running" style={fontlogorunning}></i>
            <Manage left="15%" top="14%" text="Social Profile   "/>
            <Manage left="22%" top="14%" text="Friends"/>
     <Manage left="80%" text="Manage" top="15%"/> 
     <SyncDevices/>
<SyncApps top="7%" left="75%" color="rgba(255, 255, 255,0.19)"/>
    <Manage left="87%" text="Logout" top="15%"/>
     <ProgressBar/>
        </div>
        <Slantbar/>
        </div>
    )
    }
}

export default Topbar; 
