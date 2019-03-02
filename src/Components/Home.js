import React, { Component } from 'react';
import AuthBox from '../auth/Auth';
// import MastHead from './Masthead'

export default class Home extends Component {
    render() {
        return(
            <div className='home'>
                {/* <MastHead /> */}
                <div className='loginBox'>
                    <AuthBox />
                </div>
            </div>
        )
    }
} 