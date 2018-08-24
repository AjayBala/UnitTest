import React, { Component, Fragment } from 'react';
import { ControlLabel, FormGroup, FormControl, Button } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import './ShopYesorNo.css';
import tableImg from '../../../assets/Images/tableImg.png';
import history from '../../history';

export default class ShopYesorNo extends Component {
    constructor() {
        super();
    }

    render() {
        return(
        <div className="formWrap shopYesNoWrap">
            <p className="shopEmailTxt">Do you already Shop on Overstock using your work email?</p>
            
            <Button type="button" className="NoButton" onClick={() =>history.push('./signup')}>No</Button>
            <Button type="button" className="YesButton" onClick={() =>history.push('./exist-account')}>Yes</Button>
            <p className="signInTxt">Already a member of Overstock Professional?<a href="/login">&nbsp;&nbsp;Sign In </a> </p>
        </div>
            
        )
    }    
}
