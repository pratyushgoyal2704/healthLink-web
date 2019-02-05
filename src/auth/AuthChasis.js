import React, { Component } from 'react';
import GoogleAuth from './Google.js';
import FacebookAuth from './Facebook.js';

export default class AuthChasis extends Component {
    render () {
        return(
            <div className = 'loginChasis'>
                <div className = "loginChasis-btn-wrap">
                    <GoogleAuth />
                    <FacebookAuth />
                </div>
            </div>
        )
    }
}