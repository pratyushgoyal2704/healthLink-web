import React, { Component } from 'react'
import { MastHeadAuthButtons } from './Button';

export default class Masthead extends Component {
    render() {
        return (
            <div className='masthead'>
                <div className='temp-mastheadFit'>
                    <img className='temp-mastheadFit-logo' src='/src/res/logo/fit.png' />
                </div>
                <MastHeadAuthButtons />
            </div>
        )
    }
}
