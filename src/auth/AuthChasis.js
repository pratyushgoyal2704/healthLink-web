import React, { Component } from 'react';
import GoogleAuth from './Google.js';
import GithubAuth from './Github.js';
import TwitterAuth from './Twitter.js';
import FacebookAuth from './Facebook.js';
import LinkedInAuth from './LinkedIn.js'

export default class AuthChasis extends Component {
    render () {
        return(
            <div className = 'loginChasis'>
                <div className = "loginChasis-btn-wrap">
                    <GoogleAuth />
                    <GithubAuth />
                    <TwitterAuth />
                    <FacebookAuth />
                    <LinkedInAuth />
                </div>
            </div>
        )
    }
}