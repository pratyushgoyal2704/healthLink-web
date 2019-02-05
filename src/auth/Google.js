import React, { Component } from 'react';
import GoogleLogin from 'react-google-login'
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import Axios from 'axios';

const addGoogleUser = gql `
    {
        addGoogleUser(
            accessToken: ""
            userID: ""
            name: ""
            email: ""
            picture: ""
            scopes: "https://www.googleapis.com/auth/fitness.activity.read"
        )
    }
`

export default class GoogleAuth extends Component {

    // Mainintaining state
    
    // state = {
    //         isLoggedIn: false,
    //         accessToken: '',
    //         fitToken: '',
    //         userID: '',
    //         name: '',
    //         email: '',
    //         picture: '',
    //         scopes: "https://www.googleapis.com/auth/fitness.activity.read",
    // }

    dateFromMillis = (millis) => {
        // THIS IS A TEST MODULE <DEV>
    }

    getThirtyDaySteps = (obj) => {
        // THIS IS A TEST MODULE <DEV>
        var dateToStep_Map = new Map();

    } 
    
    // Event Logger
    responseGoogle = (response) => {

        // THIS IS A TEST MODULE <DEV>
        // Axios.get['URL'] is set to estimated steps for the purpose of testing
        
        /* State Has to be Manipulated Accordingly */
        
        // this.setState({
        //     ...this.state,
        //     accessToken: response.accessToken,
        //     fitToken: response.accessToken,
        // });
        
        // Log the resonse <DEV>
        console.log('Google Login: ', response.accessToken);
        
        // Get from FIT API & Send Details to server after checking for success
            // THE POST <DEV> (Change with GET for appropriate functionality)
            Axios.post(
                'https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate/', {
                    "aggregateBy": [{
                        "dataSourceId": "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps"
                    }],
                    "bucketByTime": { "durationMillis": 86400000 },
                    "startTimeMillis": 1545796042776,
                    "endTimeMillis": 1549277571327
                },{
                    headers: {
                        "Authorization" : 'Bearer ' + response.accessToken
                    }
                }
            ).then((res) => {
                    var res = res.data;
                    console.log('Response: ', res);
                },
                (error) => {
                    var status = error.res.status
                    console.log('Error: ', status);
                }
            );

            //   THE POST
            // res = Axios.get('')
    }
    
    render() {
        return (
            <div>
                <GoogleLogin
                    className="login-google-button"
                    clientId="161552980233-2g39krb5q3df83b02n0ltpsueehrb8gi.apps.googleusercontent.com"
                    buttonText="Login"
                    scope='https://www.googleapis.com/auth/fitness.activity.read'
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle} />
            </div>
        )
    }

}