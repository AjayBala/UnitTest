import React, { Component, Fragment } from 'react';
import { ControlLabel, FormGroup, FormControl, Button } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { browserHistory } from 'react-router';
import './ForgotPassword.css';
import history from '../../history';

const validate = (values) => {
    const error = {};
    const emailPattern = /(\w+)\@(\w+)\.[a-zA-Z]/g;
    const emailPasswordPattern = /^[a-zA-Z0-9]{8,16}$/g;
    let validEmail = emailPattern.test(values.email);
    let validPwd = emailPasswordPattern.test(values.password);
    if(!values.email) {
        error.email = "Required";
    } else if(!validEmail) {
        error.email = "Please Enter a Valid Email";
    }

    if(!values.password) {
        error.password = "Required";
    }
    else if (values.password.length < 8) {
        error.password = "Password should be greater than 8";
    
    } else if (values.password.length > 17) {
        
        error.password = "Password should be lesser than 16";
    }
    //  else if (values.password.search(/\d/) == -1) {
        
    //     error.password = "No num";
    // }
    //  else if (values.password.search(/[a-zA-Z]/) == -1) {
        
    //     error.password = "no letter";
    // } 
    
    else if (values.password.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:]/) != -1) {
        
        error.password = "Bad Character is not allowed";
    }
   
    return error;
}

const renderField = ({ placeholder, input, label, type, meta: { touched, error }}) => (
    <div className="form-group">
      <label className="labelTxt">{label}</label>
      <input {...input} placeholder={placeholder} type={type} className="form-control" />
      {touched && ((error && (<span className="errorTxt">{error}</span>)))}
    </div>
  );

 class ForgotPassword extends Component {
    constructor() {
        super();
    }

    render() {
        const { handleSubmit, pristine, submitting, reset, dirty } = this.props;
        const handleSubmitForm = (values) => {
          console.info('FormValues', values);
          history.push('./login')
        };
        return(
        <div className="containInnerWrap">
            <div className="loginBoxWrap">
                <div className="loginBox">
                    <h1 className="title_h1 forgotTitle">Forgot Password
                        <span className="signInTxt">Enter a new password</span>   
                    </h1>
                                 
                    <form onSubmit={handleSubmit(handleSubmitForm)}>
                        <Field name="password" type="password" component={renderField} label="Create New Password" />
                        <Field name="confirmPassword" type="password" component={renderField} label="Confirm Password"/>
                        <div className="form-group">
                            <button className="btnSignIn"> Done </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        )
    }    
}

export default reduxForm({
    form: 'forgotPassword',
    validate,
  })(ForgotPassword);

