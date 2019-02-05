import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// AuthButtons
// Masthead AuthButtons

export class MastHeadAuthButtons extends Component {
    render() {
        return (
            <div className='masthead-auth-btns'>
                <Link to='/dash' className='raised-white-btn'>Sign In</Link>
                <Link to='/dash' className='raised-white-btn'>Register</Link>
            </div>
        )
    }
}
