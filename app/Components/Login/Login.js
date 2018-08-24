import React from 'react';
import { Field, reduxForm , formValueSelector } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Recaptcha from 'react-recaptcha';
import history from '../../history';
import loginAction from '../../actions/loginAction';
import logo from '../../../assets/Images/Overstock_logo.png';
import './Login.css';

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
  
  } else if (values.password.length > 16) {
      
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

export class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      recaptchaVerified: false 
    }
  }

  callback = () => console.log("Recaptcha loaded");

  verifyCallback = () => {
    this.setState({
      recaptchaVerified: true
    })
  }

  goToForgot = () =>{
    const { emailId } = this.props;
    this.props.actions.getEmailId(emailId);
    history.push('/send-email');
  }

  goToB2BMigration = () =>{
    const { emailId, password } = this.props;
    this.props.actions.loginValues({email: emailId, password: password});
    history.push('/shop-yesno');
  }

  render() {
    const { handleSubmit, pristine, submitting, reset, dirty, loginError , actions} = this.props;
    const handleSubmitForm = (values) => {
        history.push('/home');
    };
    return (
      <div className="containInnerWrap containInner"> 
          <h1 className="title_h1"> Sign In to Your Overstock Professional Account</h1>
          <div className="loginBoxWrap">
            <div className="loginBox">
              <form onSubmit={handleSubmit(handleSubmitForm)}>
                <Field name="email" component={renderField} label="Email" placeholder="Email" />
                <Field name="password" type="password" component={renderField} label="Password" placeholder="Password" />
                <Recaptcha
                  className="rca-styles"
                  sitekey="6LfKaWoUAAAAAJDt-nKlTsZ92TkprXJ2xqgZ-YND"
                  render="explicit"
                  verifyCallback={this.verifyCallback}
                  onloadCallback={this.callback}
                />
                <div className="form-group">
                  <button className="btnSignIn" disabled={!this.state.recaptchaVerified}>Sign In</button>
                  <div className='forgotTxt'> <a  onClick={() => this.goToForgot()}> Forgot Password?</a> </div>
                  <button className="btnSignIn" onClick={() => history.push('/create-account')}>Create Account</button>
                  <button className="btnSignIn" onClick={() => this.goToB2BMigration()}>B2C To B2B Migration</button>
                </div>
              </form>
            </div>
          </div>
      </div>
    );
  }
}
const LoginPage = reduxForm({
  form: 'login',
  validate,
})(Login);
const selector = formValueSelector('login');
const mapStateToProps = (state) =>({
  emailId: selector(state, 'email'),
  password: selector(state, 'password'),
});

const matchDispatchToProps = dispatch => ({
actions: bindActionCreators(Object.assign(
  loginAction,
), dispatch),
});

export default connect(mapStateToProps, matchDispatchToProps)(LoginPage);

//export default LoginPage;
