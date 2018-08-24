
import React from 'react';
import './GovtShoppingPreference.css';
import { Field, reduxForm } from 'redux-form';


class Chkboxlist extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {}
        props.values.map((v, i) => {
            this.state[v] = false
        })
    }
  
    onChange(key, value) {
        this.setState({ [key]: value }, (state) => {
            this.props.onChange(this.state)
        })
    }
  
    render() {
        return (
            <ul className="ShoppingPreferenceList">
                  {this.props.values.map((value, i) => (
                      <li className="checkboxWrap" key={i}>
                          <label className="checkopt">
                              <input 
                                  onChange={(e) => this.onChange(value, e.target.checked)} 
                                  type='checkbox' 
                                  value={this.state[value]}
                              />
                              {value}
                          </label>
                      </li>
                  ))}
            </ul>
        )
    }
  }



export class GovtShoppingPreference extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {}
    }
  
   onChange(name, values) {
        this.setState({ [name]: values })
    }

    render() {
        const productslist = ["Office supplies", "Cleaning & Janitorial", "Building Materials", "Electrical", "Outdoor Equipment", "Plumbing", "Hardware", "Tools", "Furniture", "Safety & Security"];
        const { handleSubmit, pristine, reset, submitting, previousPage } = this.props
        return (
            <div className="MidContentWrap">
                <div className="formOutterWrap">
                 <h2 className="titleTxt_2">What type of products do you shop for ?</h2>
                                    
                
                <form onSubmit={handleSubmit} className='form-style'>
                    <Chkboxlist onChange={(values) => this.onChange('speak', values)} values={productslist} />

                    <div className="BottomField">
                        <div className="terms">
                            By clicking finish you agree to user &nbsp; <a href="https://help.overstock.com/help/s/article/TERMS-AND-CONDITIONS">Terms & Conditions </a>
                        </div>
                        
                        <div className="formBtnWrap">
                            <button className="formBtn" type="submit" onClick={previousPage} >Back</button>
                            <button className="formBtn" type="submit" disabled={submitting}>Finish</button>
                        </div>
                    </div>
                </form>
                 </div>
                
                </div >
        )
    }
}

export default reduxForm({
    form: 'Govt', // a unique identifier for this form
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
})(GovtShoppingPreference)
