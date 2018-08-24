import React from 'react';
import Stepper from 'react-stepper-horizontal';
import { code , Navbar, Row, Col, Grid, Nav, NavItem, Radio, FormGroup} from 'react-bootstrap'; 
import { Router, Route } from 'react-router-dom';
import './GovtStyle.css';
import GovtBusinessInfo from '../Govt/GovtBusinessInfo/GovtBusinessInfo';
import GovtShoppingPreference from './GovtShoppingPreference/GovtShoppingPreference';
// import Login from '../Login/Login';
import history from '../../history';
import Model from '../Model/SuccessPopup';

const steps = [{title: 'Business Information', id: 0}, {title: 'Shopping Preferences', id: 1}];
class Govt extends React.Component{
    constructor() {
      super();
      this.state = ({currentStep: steps[0], isModalAppear: false});
    }

  nextPage = () => {
      console.info('this.state.currentStep.id@@@@', this.state.currentStep.id)
      this.setState({ currentStep: steps[this.state.currentStep.id + 1]})
  }
  
  previousPage = () => {
      this.setState({ currentStep: steps[this.state.currentStep.id - 1]})
  }
  onSubmit = (values) => {
   history.push('./home');
   // this.setState({ isModalAppear: true })
      console.log('final submit', values);
  }

  closeModel = () => {
    history.push('./home');
    this.setState({ isModalAppear: false })
  }

    render() {
        const { currentStep, isModalAppear } = this.state;
        return (
        <Grid fluid={true} >
          <Row className="insideHeaderWrap" >
          <Col  lg={3} md={4} sm={4}><h1 className='titleTxt_1'>{currentStep.title}</h1>
          </Col>
          <Col  lg={6} md={8} sm={8} className='stepProgressWrap' >
            <Stepper  steps={steps} activeStep={currentStep.id}
                activeColor = '#000'
                completeColor = '#000'
                circleFontColor = 'transparent' />
          </Col>
          </Row>
          <div className="container">
            {currentStep.id === 0 && <GovtBusinessInfo onSubmit={this.nextPage}/>}
            {currentStep.id === 1 && <GovtShoppingPreference previousPage={this.previousPage} onSubmit={this.onSubmit}/>}
          </div>
          {/* <div>
          {isModalAppear && <Model showModal ={isModalAppear} onClose={this.closeModel} />}
        </div> */}
        </Grid>
        );
      }
}

export default Govt;