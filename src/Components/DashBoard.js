import React, { Component } from 'react';

export default class DashBoard extends Component {
    render() {
        return(
            <div>
                Logged In By {this.props.authClient}
            </div>
        )
    }
}