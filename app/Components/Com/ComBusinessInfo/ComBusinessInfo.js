import React from 'react';
import Stepper from 'react-stepper-horizontal';
import { code , Navbar, Row, Col, Grid, Nav, NavItem, Button, FormGroup, Tooltip, OverlayTrigger} from 'react-bootstrap'; 
import { Router, Route } from 'react-router-dom';
import './ComBusinessInfo.css';
import SmallBusiness from './SmallBusiness/SmallBusiness';
import Corporation from './Corporation/Corporation';
const tooltip = (
    <Tooltip id="tooltip" >
        <h5> Recommended if you </h5>
     
            <p > <i className="fa fa-circle" aria-hidden="true"></i> Make custom orders on item</p>
            <p> <i className="fa fa-circle" aria-hidden="true"></i>Make bulk or frequent orders directly from your vendor</p>
        
    </Tooltip>
);

const tooltip1= (
    <Tooltip id="tooltip">
        <h5> Recommended if you </h5>
        
        <p > <i className="fa fa-circle" aria-hidden="true"></i> Already use your Overstock account exclusively for business</p>
        <p > <i className="fa fa-circle" aria-hidden="true"></i>Need to buy products for your business a discounted rate</p>
      
    </Tooltip>
);

export default class ComBusinessInfo extends React.Component {
    constructor() {
        super();
        // this.state = ({businessType: 'Corporation'});
      }

      render() {
        const { businessType, onBusinessTypeChange } = this.props;
        //   const { onSubmit } = this.props;
        
     
        return (
            <div>
        <section className="MidContentWrap">
            <Row className="TabTxtWrap">
                <Col lg={12} sm={12}>
                    <p> Select the Option that best describes your business </p>
                </Col>
                <Col lg={6} sm={12}>
                    <OverlayTrigger placement="bottom" overlay={tooltip} className="customtooltip">
                      <Button name="businessType" className="buttonwrap"  checked={businessType =='Corporation' }
                        onClick={() => onBusinessTypeChange('Corporation')}><strong>Corporate </strong>  </Button>
                    </OverlayTrigger>
                </Col>
                <Col lg={6} sm={12}>    
                    <OverlayTrigger placement="bottom" overlay={tooltip1}>
                        <Button name="businessType" className="buttonwrap" title="Recommended if you" data-toggle="tooltip" checked={businessType =='Small Business'} onClick={() => {onBusinessTypeChange('Small Business')}}><strong>Small Business </strong></Button>
                    </OverlayTrigger>
                </Col>
            </Row>
            </section>
            <div className="formOutterWrap">
                {businessType === 'Corporation' && <Corporation
                {...this.props}/>}
                {businessType === 'Small Business' && <SmallBusiness
                {...this.props}/>}
            </div>
        </div>
        )
    }
}