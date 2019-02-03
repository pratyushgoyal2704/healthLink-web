import React, { Component } from 'react';
import GoogleLogin from 'react-google-login'

export default class GoogleAuth extends Component {
    
    // Event Logger
    responseGoogle = (response) => {
        console.log(response);
    }
    
    render() {
        return (
            <div>
                <GoogleLogin
                    className="login-github-button"
                    clientId="161552980233-2g39krb5q3df83b02n0ltpsueehrb8gi.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle} />
            </div>
        )
    }

}