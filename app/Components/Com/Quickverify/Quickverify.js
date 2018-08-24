import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Link } from 'react-router-dom';
import { FormGroup, Checkbox, Button, Row, Col } from "react-bootstrap";
import { Field, reduxForm,reset } from 'redux-form';
import './QuickVerify.css';
import { connect } from 'react-redux';

const required = value => (value ? undefined : 'Required');
const maxLength = max => value => (value && value.length > max ? `Must be ${max} characters or less` : undefined);
export const minLength = min => value => (value && value.length < min ? `Must be ${min} characters or more` : undefined);


const validate = values => {
  const errors = {}
  if (Number(values.year) < 2019) {
    errors.year = 'Year should be at least 2019'
  }
  else if (Number(values.year) > 2030) {
    errors.year = 'Year should be below 2030'
  }
  else if (Number(values.month) < 0) {
    errors.month = 'Month should be between 1 to 12'
  }
  else if (Number(values.month) > 12) {
    errors.month = 'Month should be between 1 to 12'
  }

  return errors
}

const normalizeCard= (value, previousValue) => {
  if (!value) {
    return value
  }
  const onlyNums = value.replace(/[^\d]/g, '')
  if (!previousValue || value.length > previousValue.length) {
    // typing forward
    if (onlyNums.length === 4) {
      return onlyNums + '-'
    }
    if (onlyNums.length === 8) {
      return onlyNums.slice(0, 4) + '-' + onlyNums.slice(4) + '-'
    }
    if (onlyNums.length === 12) {
      return onlyNums.slice(0, 8) + '-' + onlyNums.slice(8) + '-'
    }
  }
  if (onlyNums.length <= 4) {
    return onlyNums
  }
  if (onlyNums.length <= 8) {
    return onlyNums.slice(0, 4) + '-' + onlyNums.slice(4)
  }
  if (onlyNums.length <= 12) {
    return onlyNums.slice(0, 8) + '-' + onlyNums.slice(8)
  }
  return onlyNums.slice(0, 4) + '-' + onlyNums.slice(4, 8) + '-' + onlyNums.slice(8, 12) + '-' + onlyNums.slice(12, 16)
}


const renderField = ({ placeholder, input, label, type, meta: { touched, error } }) => (
  <div className='form-group'>
    <label className="labelTxt"><b>{label}</b></label>
    <input {...input} placeholder={placeholder} type={type} className="form-control SqaureText" />
    {touched && ((error && <span className="errorTxt">{error}</span>))}
  </div>
)

const normalizeZip = (value, previousValue) => {
  if (!value) {
    return value
  }
  const onlyNums = value.replace(/[^\d]/g, '')
  return onlyNums;
}


class QuickVerify extends Component {
  constructor() {
    super();
  };

  render() {
    const { handleSubmit, pristine, reset,submitting, submitCase, previousPage } = this.props;
    return (
      <div className="MidContentWrap">
        <div className="">
          <h1> Get Verified Quicker (Optional) </h1>
          <div className="skipOption">
            <a type="submit" onClick={handleSubmit}> <p className="pointer">Skip</p></a>
          </div>
          <p> Business Credit Card </p>
          <p> If you have one,it helps us verify your account even faster.<b> Your card will not be charged.</b> </p>
        </div>

        <div className="formOutterWrap">

          <form onSubmit={handleSubmit} className='form-style'>
            <Field name="name" component={renderField} label="Name on Card" />
            <Field name="number" type="text" component={renderField} label="Card Number" normalize={normalizeCard} />
            <Row>
              <Col lg={4} sm={4} className="expmonth" ><Field name="month" type="number" placeholder="MM" component={renderField} label="Exp.Date" /></Col>
              <Col lg={4} sm={4} className="expyear" ><Field name="year" type="number"  placeholder="YYYY" component={renderField} label="" /></Col>
              <Col lg={4} sm={4}><Field name="cvnumber" type="password"  component={renderField} label="CV" /></Col>
            </Row>
            <Row>
              <Col lg={12} sm={12} className="" >
                <Field name="checkbox" type="checkbox" component="input" className="checkmark"/> <span className="chkwordings"> Use address from business information</span>
    </Col>
            </Row>
            <br />
            <Field name="address" type="text" component={renderField} label="Street Address" />
            <Row>
            <Col lg={5} sm={5}><Field name="City" component={renderField} label="State" /></Col>
              <Col lg={3} sm={3}><Field name="State" type="text" component={renderField} label="City" /></Col>
              
              <Col lg={4} sm={4} className="zip"><Field name="Zip" type="text" component={renderField} label="Zip" normalize={normalizeZip}/></Col>
            </Row>

            <div className="formBtnWrap">
              <button className="formBtn" type="submit" onClick={previousPage} >Back</button>
              <button className="formBtn" type="submit" disabled={submitting}>Next</button>
            </div>

          </form>

        </div>
      </div>
    )
  };
}

export default reduxForm({
  form: 'Com',
  validate,
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
})(QuickVerify);