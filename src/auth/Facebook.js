import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login'
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const addFBUser = gql `
    {
        addFBUser(
            accessToken: ""
            userID: ""
            name: ""
            email: ""
            picture: ""
        )
    }    
`

export default class FacebookAuth extends Component {

    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''
    }

    // Event Logger
    responseFacebook = (response) => {
        console.log('Facebook login response: ', response);
    }

    componentClicked = () => {
        console.log('Facebook login initiated');
    }

    render() {
        if(this.state.isLoggedIn){
            return(
                <div>
                    Logged In !
                </div>
            )
        }
        else{  
            return (
                <div>
                    <FacebookLogin
                        appId="408480956361551"
                        autoLoad={true}
                        fields="name,email,picture"
                        onClick={this.componentClicked}
                        callback={this.responseFacebook} />
                </div>
            )
        }
    }
}