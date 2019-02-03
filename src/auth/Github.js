import React, { Component } from 'react';
import Axios from 'axios';

export default class GithubAuth extends Component {
    renderGithub = () => {
        console.log('Github Main Auth Initiated');
        Axios.get('https://github.com/login/oauth/authorize?client_id=632b574340ef86c4c928&scope=user');
    }
    render() {
        return (
            <div>
                <button onClick={this.renderGithub} className="login-github-button"><img className="login-github-button-image-logo" src="./src/res/auth/github/GitHub-Mark/GitHub-Mark/PNG/GitHub-Mark-Light-64px.png"/><span className="login-github-button-text">Sign in with </span><img className="login-github-button-image-branding" src="./src/res/auth/github/GitHub-Logos/GitHub-Logos/GitHub_Logo_White.png"/></button>
            </div>
        )
    }
}