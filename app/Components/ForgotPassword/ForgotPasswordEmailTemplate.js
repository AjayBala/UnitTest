import React, { Component, Fragment } from 'react';
import { ControlLabel, FormGroup, FormControl, Button } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import history from '../../history';

export default class ForgotPasswordEmailTemplate extends Component {
    constructor() {
        super();
    }

    render() {
        return(
        <div className="containInnerWrap">
            <div className="loginBoxWrap">
                <div className="loginBox">
                    <div>
                        <label className="labelTxt">Hit the button below to reset your password</label>
                    </div>
                    <div className="form-group">
                        <button className="btnSignIn" onClick={() => history.push('./forgot-password')}>Reset Password</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }    
}
