import React, { Component } from 'react'

export default class FitnessProgressBar extends Component {
    state = {
        'isLoggedIn': false,
        'progress': '0%' 
    }

    calcStats = () => {
        
    }

    render() {
        return (
            <div className='head-fitness-progress-bar'>
                <div className='head-fitness-progress-bar-progress'>
                    <div className='head-fitness-progress-bar'></div>
                    <span className='head-fitness-progress-bar-progressNum'></span>
                </div>    
            </div>
        )
    }
}
