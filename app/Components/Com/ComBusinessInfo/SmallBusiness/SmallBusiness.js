import React from 'react';
import { Field, reduxForm,reset } from 'redux-form';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {FormGroup, Checkbox, Button, Row, Col} from "react-bootstrap";
import './SmallBusiness.css';
import history from '../../../../history';
import {categorys} from '../../../../Constants/Util'

const required = value => (value ? undefined : 'Required');

const validate = (values) => {
  const error = {};
  const emailPattern = /(\w+)\@(\w+)\.[a-zA-Z]/g;
  let validEmail = emailPattern.test(values.email);
  
  if(!validEmail) {
      error.email = "Please Enter a Valid Email";
  }

  return error;
}

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
        <option value="">Ex.Hotel, Interior Designer, Office</option>
        {categorys.map(obj => <option value={obj.value} key={obj.id}>{obj.value}</option>)}
      </select>
      {touched && error && <span className="errorTxt">{error}</span>}
    </div>
  );
  
const SmallBusiness = (props) => {
    const { handleSubmit, pristine, submitting, reset, dirty, loginError, onNext, previousPage } = props;
    // const handleSubmitForm = (values) => {
    //     onNext(values);
    //   console.info('FormValues', values);
    // };

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
              <Field name="name" component={renderField} label="Your Full Name*" validate={required}/>
              <Field name="business" component={renderDropDown} label="Business Category*" validate={required} />
              <Field name="employee" component={renderField} type="text" normalize={normalizeZip} label="Number of employees(optional)" placeholder="2-5" />
              <Field name="name" component={renderField}  label="Name of Business*" validate={required} />
              <Field name="Ein" component={renderField} label="EIN*" validate={required}/>
              <div className="form-group radioBtnError">
                <label className="labelTxt">Are you a non-profit 501(c)?*</label><br />
                <label><input name="nonProfit" type="radio" defaultChecked={true} value="yes" />Yes </label>&nbsp;&nbsp;
                <label><input name="nonProfit" type="radio" value="no" />No</label>
              </div>
            </Col>
            
            <Col lg={6} sm={12}>
              <div className="formright">
              <Field name="Email" component={renderField} label="Email*" validate={required} />
              <Row className="phonenumber"><Col lg={4} sm={4} className="number"><Field name="phoneText1" type="text" label="PhoneNumber*" normalize={normalizeZip} style={{ "width": '80px' }} component={renderField} validate={required} /></Col>
                <div className="ComPhoneTextWrap"><Col lg={4} sm={4} className="number"><Field name="phoneText2" type="text" normalize={normalizeZip} component={renderField} validate={required} /></Col>
                  <Col lg={4} sm={4} className="number"><Field name="phoneText3" type="text" normalize={normalizeZip} component={renderField} validate={required} /></Col>
                </div>
              </Row>
              <Field name="Address" component={renderField} label="Street Address*" validate={required}/>
              <Field name="City" component={renderField} label="City*" validate={required}/>
              <Row><Col lg={7} sm={7}><Field name="state" component={renderField} validate={required}  label="State*" /></Col>
                <Col lg={5} sm={5} className="zip"><Field name="zip" type="text" component={renderField} validate={required} normalize={normalizeZip} label="Zip*" /></Col>
              </Row>
              </div>
            </Col>
            </Row>
          <div className="formBtnWrap">
          <button className="formBtn" type="submit" disabled={submitting}>Next</button>
        </div>
      </form>
    </div>
    );
}

export default reduxForm({
    form: 'Com', // a unique identifier for this form
    destroyOnUnmount: false, 
    validate,     // <------ preserve form data
    forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
  })(SmallBusiness)

