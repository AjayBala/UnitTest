import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Link } from 'react-router-dom';
import { Button, FormGroup, FormControl, ControlLabel, Row, Col } from "react-bootstrap";
import { Field, reduxForm, reset } from 'redux-form';
import './Corporation.css';
import history from '../../../../history';
import {categorys} from '../../../../Constants/Util'

const required = value => (value ? undefined : 'Required');
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const positiveValue = value =>
  value && value <= 0 ? `Must be positive values` : undefined
const minValue = min => value =>
  value && value.length < min ? `Must be at least ${min}` : undefined


  const validate = (values) => {
    const error = {};
    const emailPattern = /(\w+)\@(\w+)\.[a-zA-Z]/g;
    let validEmail = emailPattern.test(values.email);
    
    if(!validEmail) {
        error.email = "Please Enter a Valid Email";
    }

    return error;
}

class FieldFileInput extends Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    const { input: { onChange } } = this.props
    onChange(e.target.files[0])
  }

  render() {
    const { input: { value } } = this.props
    const { input, label, required, meta, } = this.props  //whatever props you send to the component from redux-form Field
    return (

      <div>
        <label>{label}</label>
        <div className="file">
              <input
                type='file'
                id="file-input"
                accept='.jpg, .png, .jpeg, .pdf, .txt'
                onChange={this.onChange} />
              <label htmlFor="file-input">Upload</label>
          </div>
      </div>
    )
  }
}

const renderField = ({placeholder, input, label, type, meta: { touched, error } }) => (
  <div className="form-group">
    <label className="labelTxt">{label}</label>
    <input {...input} placeholder={placeholder} type={type} className="form-control SqaureText" />
    {touched && ((error && (<span className="errorTxt">{error}</span>)))}
  </div>
);

const renderDropDown = ({placeholder,label, input, meta: { touched, error } }) => (
  <div className="form-group">
  <label className="labelTxt">{label}</label><br/>
    <select {...input} className="form-control SqaureText">
      <option value="">Ex.Hotel, Interior Designer, Office</option>
      {categorys.map(obj => <option value={obj.value} key={obj.id}>{obj.value}</option>)}
    </select>
    {touched && error && <span className="errorTxt">{error}</span>}
  </div>
);

const Corporation = (props) => {
  const {
    handleSubmit, pristine, reset, submitting, submitCase,
  } = props;

  const normalizeZip = (value, previousValue) => {
    if (!value) {
      return value
    }
    const onlyNums = value.replace(/[^\d]/g, '')
    return onlyNums;
  }

  return (
    <div className="formOutterWrap">
      <form onSubmit={handleSubmit} className='Com-form-style'>
          <Row>
            <Col lg={6} sm={12}>
            <div className="formleft">
              <Field name="checkbox" type="checkbox" component="input" className="checkmark" /> <span className="chkwordings"> I am a government agency</span><br/><br/>
            </div>
              <Field name="name" component={renderField} label="Your Full Name*" validate={required} />
              <Field name="business" component={renderDropDown} label="Business Category*" validate={required} />
              <Field name="employee" component={renderField} type="text"  normalize={normalizeZip} label="Number of employees(optional)" placeholder="2-5" />
              <Field name="name" component={renderField} label="Name of Business*" validate={required}  />
              <div className="form-group radioBtnError">
                <label className="labelTxt">Are you a non-profit 501(c)?*</label><br />
                <label><input name="nonProfit" type="radio" defaultChecked={true} value="yes" />Yes </label>&nbsp;&nbsp;
                <label><input name="nonProfit" type="radio" value="no" />No</label>
              </div>
            </Col>
            
            <Col lg={6} sm={12}>
              <div className="formright">
              <Field name="Email" component={renderField} label="Email*"  validate={required}/>
              <Row className="phonenumber"><Col lg={4} sm={4} className="number"><Field name="phoneText1" type="text" label="PhoneNumber*" normalize={normalizeZip} style={{ "width": '80px' }} component={renderField} validate={[required, positiveValue, minValue(3)]} /></Col>
                <div className="ComPhoneTextWrap"><Col lg={4} sm={4} className="number"><Field name="phoneText2" type="text" normalize={normalizeZip} component={renderField} validate={[required, positiveValue, minValue(3)]} /></Col>
                  <Col lg={4} sm={4} className="number"><Field name="phoneText3" type="text" normalize={normalizeZip} component={renderField} validate={[required, positiveValue, minValue(4)]} /></Col>
                </div>
              </Row>
              <Field name="Address" component={renderField} label="Street Address*" validate={required} />
              <Field name="City" component={renderField} label="City*" validate={required}/>
              <Row><Col lg={7} sm={7}><Field name="state" component={renderField} validate={required} label="State*" /></Col>
                <Col lg={5} sm={5} className="zip"><Field name="zip" type="text" component={renderField} validate={required} normalize={normalizeZip} label="Zip*" /></Col>
              </Row>
              </div>
            </Col>
            </Row>
            <Row className="fileuploadwrap">
                <Col lg={7} sm={12}>
                    <div className="fileupload">
                      <p >Please upload any supporting documents that validate your business information. Please note verification of these documents can take up to 24 hours. 
                      <br/> <br/> <b>Supported documents include:</b> Resale certificate, Business License, Professional license or permit, State tax exemption, Membership document</p> 
                    </div>
                </Col>
                <Col lg={5} sm={12}>
                    <div className="fileuploadbuton">
                    <Field 
                        name="uploadFile"
                        component={FieldFileInput}
                    />
                    </div> 
                </Col>
            </Row>
        <div className="formBtnWrap">
          <button className="formBtn" type="submit" disabled={submitting}>Next</button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'Com', // a unique identifier for this form
  destroyOnUnmount: false,
  validate,
  forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
  enableReinitialize: true,
})(Corporation);