import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import history from '../../history';

import ModalPopup from "../Model/Model";
import logo from '../../../assets/Images/Overstock_logo.png';
import './Exitaccount.css';

const validate = (values) => {
  const error = {};
  const emailPattern = /(\w+)\@(\w+)\.[a-zA-Z]/g;
  let validEmail = emailPattern.test(values.email);

  if(!values.email) {
      error.email = "Required";
  } else if(!validEmail) {
      error.email = "Please Enter a Valid Email";
  }

  if(!values.password) {
      error.password = "Required";
  }
  return error;
};

  const renderField = ({ placeholder, input, label, type, meta: { touched, error }}) => (
    <div className="form-group">
      <label className="labelTxt">{label}</label>
      <input {...input} placeholder={placeholder} type={type} className="form-control" />
      {touched && ((error && (<span className="errorTxt">{error}</span>)))}
    </div>
  );

export class Exitaccount extends React.Component {
  
  constructor() {
    super();

    this.state = ({  checked: false });
    this.handleChange = this.handleChange.bind(this);
  }


  // handleSignIn = () => {
  //   this.setState({
  //     open: true
  //   })
  // }

  closeModel = () => {
    this.setState({
      open: false
    });
  }


  handleChange() {
    this.setState({
      checked: !this.state.checked
    })
  }




  render() {
    const { handleSubmit, pristine, submitting, reset, dirty, loginError } = this.props;
    const handleSubmitForm = (values) => {
        this.setState({ open: true });
    };

    const ExistAccBtn = this.state.checked 
      ? <button className="btnSignIn crteBtn" onClick={this.handleSignIn}> Use Existing Account </button>
      : <button className="btnSignIn crteBtn" disabled> Use Existing Account </button>;

    const CreateAccBtn = this.state.checked 
      ? <a className="btnSignIn crteBtn" onClick={() => history.push('/create-account')}> Create Separate Account</a>
      : <a className="btnSignIn crteBtn disabled"> Create Separate Account</a>;  


    return (
      <div className="">
          <h1 className="title_h1"> Sign up with existing Overstock.com account</h1>
          <div className="loginBoxWrap">
            <div className="loginBox">
              <form onSubmit={handleSubmit(handleSubmitForm)}>
                <Field name="email" component={renderField} label="Email" placeholder="Email" />
                <Field name="password" type="password" component={renderField} label="Password" placeholder="Password" />
                <div className="form-group">
                  <p className="termsTxt checkopt" htmlFor="term-condition" > <input type="checkbox" id="term-condition" name="term-condition" checked={ this.state.checked } onChange={ this.handleChange } /> I agree to user 
                    <a href="https://help.overstock.com/help/s/article/TERMS-AND-CONDITIONS" target="_blank"> Terms & Conditions </a>
                  </p>
                </div>
                <div className="form-group">
                  <h4 className="title_h4">Account Options</h4>
                  { ExistAccBtn }
                  <ModalPopup show={this.state.open} onHide={this.closeModel} />
                  <div className="recommendPadd">
                    <h4 className="title_h5">Recommended if you</h4>
                    <ul className='ListWrap'>
                      <li>Already use your Overstock account exclusively for business</li>
                      <li>Don't mind if others in your organization can access your order history or account information</li>
                    </ul>  
                  </div>
                </div>

                <div className="form-group">
                  { CreateAccBtn }
                  <div className="recommendPadd">
                    <h4 className="title_h5">Recommended if you</h4>
                    <ul className='ListWrap'>
                      <li>want to keep your businees and personal Overstock Activity Separate</li>
                      <li>Have used Your Overstock.com account "jjones@overstock.com" for personal shopping</li>
                    </ul>  
                  </div>
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
const ExitaccountPage = reduxForm({
  form: 'Exitaccount',
  validate,
})(Exitaccount);



export default  ExitaccountPage;

