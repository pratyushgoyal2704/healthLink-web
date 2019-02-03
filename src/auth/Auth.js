import React, { Component } from 'react';
import AuthChasis from './AuthChasis.js';

export default class Auth extends Component {
    render() {
        return (
            // <!-- Pane for Existing Users to Login and Handle Options -->
            <div className='loginBoxMain'>
                <div className="existingLogin">
                    {/* <!-- Upper box xontaines a header ( Add images or Headings )--> */}
                    <div className="existingLoginBoxUpper">
                        <div className="existingLoginBoxUpper-image">
                            <img src="/res/logo/IHL_Logo.png" alt=""/>
                        </div>
                        <div className="existingLoginBoxUpper-heading">
                            Login
                        </div>
                    </div>
                    {/* <!-- Middle Box Contains the text Fiels and the actual Form Layout to Login --> */}
                    <div className="existingLoginBoxMid">
                        <form className="existingLogin">
                            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <input className="mdl-textfield__input" type="text" id="sample3" />
                                <label className="mdl-textfield__label" htmlFor="sample3">Username</label>
                            </div>
                            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <input className="mdl-textfield__input" type="password" id="sampl e3" />
                                <label className="mdl-textfield__label" htmlFor="sample3">Password</label>
                            </div>
                            <div className="existingLogin-buttons">
                                <button type='submit' className="existingLoginButton-login mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                                    Login
                                </button>
                                <button className="existingLoginButton-register mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"> Register </button>
                            </div>
                        </form>
                    </div>
                </div>
                <AuthChasis />
            </div>
        )
    }
}