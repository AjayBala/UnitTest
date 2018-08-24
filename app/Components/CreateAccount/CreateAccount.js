import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import history from '../../history';

import loginAction from '../../actions/loginAction';


import logo from '../../../assets/Images/Overstock_logo.png';
import './CreateAccount.css';

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

export class CreateAccount extends React.Component {
  constructor() {
    super();
  }

 


  render() {
    const { handleSubmit, pristine, submitting, reset, dirty, loginError , actions} = this.props;
    const handleSubmitForm = (values) => {
      // console.info('FormValues', values);
      // actions.existLogin(values);
      history.push('/ComingSoon');
    };
    return (
      <div className="containInnerWrap">
          <h1 className="title_h1"> Create a new Overstock Professional Account</h1>
          <div className="loginBoxWrap">
            <div className="loginBox">
              <form onSubmit={handleSubmit(handleSubmitForm)}>
                <Field name="email" component={renderField} label="Email" placeholder="Email" />
                <Field name="password" type="password" component={renderField} label="Password" placeholder="Password" />
                <div className="form-group">
                  <button className="btnSignIn">Create Account</button>
                </div>
                <div className="form-group">
                  <div className='forgotTxt'> Already a member of Overstock Professional? <a onClick={() => history.push('/login')}> Sign In</a> </div>
                </div>
              </form>
            </div>
          </div>
      </div>
    );
  }
}
const CreateAccountPage = reduxForm({
  form: 'CreateAccount',
  validate,
})(CreateAccount);


// const matchDispatchToProps = dispatch => ({
// actions: bindActionCreators(Object.assign(
//   loginAction,
// ), dispatch),
// });

// export default connect(matchDispatchToProps)(LoginPage);

export default CreateAccountPage;
