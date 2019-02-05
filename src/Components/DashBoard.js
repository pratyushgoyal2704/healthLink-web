import React, { Component } from 'react';

export default class DashBoard extends Component {

    fiveDayFitLog = () => {
        var date = new Date();

    }
    
    render() {
        return(
            <div className='dash'>
                <div className='dash-google'>
                Cool Cool Cool Cool... Noice.. Cool
                    {/* Displays Stats of the last 5 days */}
                    {/* { this.fiveDayFitLog } */}
                </div>
                <div className='dash-facebook'>
                    {/* Displays Friends */}
                </div>
            </div>
        )
    }
}