import React, { Component, Fragment } from 'react';
import { ControlLabel, FormGroup, FormControl, Button } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { browserHistory } from 'react-router';
import './ForgotPassword.css';
import history from '../../history';
import '../Login/Login.css';

  const validate = (values) => {
    const error = {};
    const emailPattern = /(\w+)\@(\w+)\.[a-zA-Z]/g;
    let validEmail = emailPattern.test(values.email);
    
    if(!values.email) {
        error.email = "Required";
    } else if(!validEmail) {
        error.email = "Please Enter a Valid Email";
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

 class sendEmail extends Component {;
    constructor() {
        super();
    }

    render() {
        console.log('props', this.props);
        const { handleSubmit, pristine, submitting, reset, dirty } = this.props;
        const handleSubmitForm = (values) => {
          history.push('./email-template')
        };
        return(
            
            <div className="loginBoxWrap">
              <div className="loginBox">
                <h1 className="title_h1 forgotTitle">Forgot Password
                    <span className="signInTxt">Enter your email address and we will send you a link.</span>
                </h1>

              <form onSubmit={handleSubmit(handleSubmitForm)}>
                <Field name="email" type="email" component={renderField} label="Email" placeholder="Email" />
                <div className="form-group">
                    <button className="btn btn-default btn-block">Send Reset Link</button>
                </div>
                </form>
              </div>
            </div>
      
        )
    }    
}

const sendEmailForm = reduxForm({
    form: 'sendEmail',
    validate,
  })(sendEmail);

const mapStateToProps = (state) =>({
    enableReinitialize: true,
    initialValues: {
        email: state.login.emailId,
    }
});

export default connect(mapStateToProps)(sendEmailForm);

