import React from 'react';
import Stepper from 'react-stepper-horizontal';
import { code , Navbar, Row, Col, Grid, Nav, NavItem, Radio, FormGroup} from 'react-bootstrap'; 
import { Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Com.css';
import ComBusinessInfo from './ComBusinessInfo/ComBusinessInfo';
import QuickVerify from './Quickverify/Quickverify';
import ComShoppingPreference from './ComShoppingPreference/ComShoppingPreference';
import Model from '../Model/SuccessPopup'
import history from '../../history';

const steps = [{title: 'Business Information', id: 0}, {title: 'Quick Verify', id: 1}, {title: 'Shopping Preferences', id: 2}];
class Com extends React.Component{
    constructor() {
      super();
      this.state = {currentStep: steps[0], businessType: 'Corporation', isModalAppear: false};
      this.nextPage = this.nextPage.bind(this)
      this.previousPage = this.previousPage.bind(this)
    }

    nextPage() {
        console.info('this.state.currentStep.id@@@@', this.state.currentStep.id)
        this.setState({ currentStep: steps[this.state.currentStep.id + 1]})
      }
    
      previousPage() {
        this.setState({ currentStep: steps[this.state.currentStep.id - 1]})
      }

      onSubmit = (values) => {
        history.push('./home');
        //this.setState({ isModalAppear: true })
        console.log('final submit', values);
      }

      closeModel = () => {
        history.push('./home');
        this.setState({ isModalAppear: false })
      }

      businessTypeChange = (type) => {
          this.setState({businessType: type});
      }

    render() {
        const { currentStep, businessType, isModalAppear} = this.state;
        return (
        <Grid fluid={true}  >
          <Row className="insideHeaderWrap" >
          <Col lg={3} md={4} sm={4}><h1 className='titleTxt_1'>{currentStep.title}</h1>
          </Col>
          <Col lg={6} md={8} sm={8} className='stepProgressWrap' >
            <Stepper className='step-progress' steps={steps} 
                activeStep={currentStep.id}
                activeColor = '#000'
                completeColor = '#000'
                defaultTitleColor = '#000'
                completeTitleOpacity = '1'
                circleFontColor = 'transparent' />
          </Col>
          </Row>
        <div>
            {currentStep.id === 0 && 
            <ComBusinessInfo
             onSubmit={this.nextPage}
             onBusinessTypeChange={this.businessTypeChange} 
             businessType={businessType}/>}
            {currentStep.id === 1 && <QuickVerify previousPage={this.previousPage} onSubmit={this.nextPage}/>}
            {currentStep.id === 2 && <ComShoppingPreference previousPage={this.previousPage} onSubmit={this.onSubmit}/>}
        </div>
        </Grid>
         );
      }
}

// Com.propTypes = {
//     onSubmit: PropTypes.func.isRequired
// }
export default Com;