import React from 'react';
import { Field, reduxForm,reset } from 'redux-form';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {FormGroup, Checkbox, Button, Row, Col} from "react-bootstrap";
import './GovtBusinessInfo.css';
import {categorys} from '../../../Constants/Util';
import history from '../../../history'; 




const required = value => (value ? undefined : 'Required');
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const positiveValue = value =>
  value && value <= 0 ? `Must be positive values` : undefined
const minValue = min => value =>
  value && value.length < min ? `Must be at least ${min}` : undefined
const renderField = ({ placeholder, input, label, type, meta: { touched, error }}) => (
    <div className="form-group">
      <label className="labelTxt">{label}</label>
      <input {...input} placeholder={placeholder} type={type} className="form-control SqaureText" />
      {touched && ((error && (<span className="errorTxt">{error}</span>)))}
    </div>
  );
  
  
  
  const renderCheckbox = ({ placeholder, input, label, type}) => (
      <input {...input} placeholder={placeholder} type={type} />
  );
  const renderDropDown = ({label, input, meta: { touched, error } }) => (
    <div className="form-group">
    <label className="labelTxt">{label}</label><br/>
      <select {...input} className="form-control SqaureText">
        <option value="">Select Category</option>
        {categorys.map(obj => <option value={obj.value} key={obj.id}>{obj.value}</option>)}
      </select>
      {touched && error && <span className="errorTxt">{error}</span>}
    </div>
  );


  const govtBusinessInfo = (props) => {
    const { handleSubmit, pristine, submitting, reset, dirty, loginError, onNext } = props;

    const normalizeZip = (value, previousValue) => {
      if (!value) {
        return value
      }
      const onlyNums = value.replace(/[^\d]/g, '')
      return onlyNums;
    }

    return (
    <div className="formOutterWrap">
       <form onSubmit={handleSubmit} className="form-style">
        <Field name="fullName" component={renderField}  validate={required} label="Your Full Name" />
        <Field name="category" component={renderDropDown} validate={[required]} label="Select Category" />
        <Field name="angencyName" component={renderField} validate={[required]} label="Agency Name" />
        <Field name="department" component={renderField} validate={[required]} label="Department" />
        <Row><Col lg={4} sm={4} className="number"><Field name="phoneText1" type="text" label="Phone Number" normalize={normalizeZip} style={{"width":'80px'}} component={renderField}  validate={[required, positiveValue, minValue(3)]} /></Col>
          <div className="phonetextwrap"><Col lg={4} sm={4} className="number"><Field name="phoneText2" type="text" normalize={normalizeZip}  component={renderField} validate={[required, positiveValue, minValue(3)]} /></Col>
          <Col lg={4} sm={4} className="number"><Field name="phoneText3" type="text" normalize={normalizeZip} component={renderField} validate={[required, positiveValue, minValue(4)]} /></Col>
        </div>
        </Row>
      
        <Field name="Street Address" component={renderField} validate={[required]} label="Street Address" />
        <Field name="city" component={renderField} validate={[required]} label="City" />
        <Row><Col lg={7} sm={7}><Field name="state" component={renderField} validate={[required]} label="State" /></Col>
          <Col lg={5} sm={5} className="zip"><Field name="zip" type="text"  component={renderField} validate={[required]} normalize={normalizeZip} label="Zip" /></Col>
        </Row>
        <label className="labelTxt">Are you a non-profit 501(c)?(Optional)</label><br/>
        <label><Field name="nonProfit" type="radio" component={renderCheckbox}  value="yes" />Yes</label>&nbsp;&nbsp;&nbsp;&nbsp;
        <label><Field name="nonProfit" type="radio" component={renderCheckbox} value="no"/>No</label>
        <div className="formBtnWrap">
        <button className="formBtn" type="button" onClick={() => reset(history.push('/login'))} >Back</button> 
          <button className="formBtn" type="submit" disabled={submitting}>Next</button>
        </div>
        </form>
    </div>
    );
}
export default reduxForm({
    form: 'Govt', // a unique identifier for this form
    destroyOnUnmount: false,        // <------ preserve form data
    forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
  })(govtBusinessInfo)