import React, { Fragment } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import SignupForm from './SignupForm';
import logo from '../../../assets/Images/Overstock_logo.png';
import tableImg from '../../../assets/Images/tableImg.png';
import './Signup.css';
import TableInfo from './table';
import FooterDetail from'../FooterDetail/FooterDetail'
import ShopYesorNo from '../ShopYesorNo/ShopYesorNo';

const SignupPage = (props) => {

    const { pathname} = props.location

    return(
        <Fragment>
            <div className="bgStyle">
            <Grid>
                <Row>    
                    <h1 className="bannerTitle_1"> Discover the one-stop shop that works for you. </h1>  

                    <Col  lg={6} md={6} xs={12}>
                        { pathname && pathname ==="/signup" &&  <SignupForm />}
                        { pathname && pathname ==="/shop-yesno" &&  <ShopYesorNo />}
                    </Col>
                    
                    <Col  lg={6} md={6} xs={12}>
                        <TableInfo/>
                    </Col>
                </Row>
            </Grid>
            </div>

            <FooterDetail />
        </Fragment>    
    );
};

export default SignupPage;
