import React, { Component, Fragment } from 'react';
import { ControlLabel, FormGroup, FormControl, Button } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { browserHistory } from 'react-router';
import { includes } from 'lodash'; 
import './Signup.css';
import history from '../../history';
import logofavicon from '../../../assets/Images/overstock_favicon.png';
import Recaptcha from 'react-recaptcha';


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
    
    } else if (values.password.length > 14) {
        
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

// const checkPwd =  (values) => {
//     const error = {};
//     const emailPatpwdPatterntern = /^[a-zA-Z0-9]{8,16}$/g;
//     let validPassword = pwdPattern.test(values.checkpassword);
//     // const str = document.getElementById('pass').values;
//     if (checkpassword.length < 6) {
//         alert("too_short");
//         return ("too_short");
//     } else if (checkpassword.length > 50) {
//         alert("too_long");
//         return ("too_long");
//     } else if (checkpassword.search(/\d/) == -1) {
//         alert("no_num");
//         return ("no_num");
//     } else if (checkpassword.search(/[a-zA-Z]/) == -1) {
//         alert("no_letter");
//         return ("no_letter");
//     } else if (checkpassword.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:]/) != -1) {
//         alert("bad_char");
//         return ("bad_char");
//     }
//     alert("oukey!!");
//     return ("ok");
// }



const renderField = ({label, type, input, meta: { touched, error }}) => (
    <Fragment>   
         <FormGroup>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...input} type={type}  autoComplete="off"/>
            {touched && ((error && (<span className="errorTxt">{error}</span>)))}
        </FormGroup>
    </Fragment>    
);

class SignupForm extends Component {
    constructor() {
        super();
    }
    

    onSubmitCall = (values) => {
        let email = values.email;
        let getDomain = email.substring(email.lastIndexOf("."));
        getDomain = getDomain.toLowerCase();
        if (getDomain == ".com") {
            history.push('/com');
        } else if (getDomain == ".gov") {
            history.push('/gov');
        }
    }
   
    render() { 
        const { handleSubmit, reset } = this.props;

        const handlePagesOnSubmit = (values) => {
             this.onSubmitCall(values);
          
        }

      

        return(
           
            <div className="formWrap">
                <h1 className="signupTitle_1"> <img src={logofavicon} alt='' /> <br/> New to Overstock professional? Sign Up.</h1>
                <form onSubmit={handleSubmit(handlePagesOnSubmit)}>
                    <Field name="email" component={renderField} type="text" label="Email"/>
                    <Field name="password" component={renderField} type="password" label="Create Password"/>
                    <div className="form-group">
                        {/* <Button type="submit" className="createAccBtn">Create Account</Button> */}
                     <Button type="submit" className="createAccBtn">Create Account</Button>
                    </div>
                </form>
                <p className="signInTxt">Already a member? <a onClick={() => history.push('/login')}>Sign In </a> </p>
            </div>
           
        )
    }    
}

const SignupCode = reduxForm({
    form: 'SignupForm',
    validate
})(SignupForm)

export default SignupCode;