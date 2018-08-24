import React, { Component } from 'react';

import { Router, Route, browserHistory } from 'react-router'
import PrivateRoute from "./Components/PrivateRouter/PrivateRouter";
import history from './history';
import Login from './Components/Login/Login';
import CreateAccount from './Components/CreateAccount/CreateAccount';
import Exitaccount from './Components/Exitaccount/Exitaccount';
import ShopYesorNo from './Components/ShopYesorNo/ShopYesorNo';
import SignupPage from './Components/Signup/SignupPage';
import HomePage from './Components/HomePage/HomePage';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import SendEmail from './Components/ForgotPassword/SendEmail';
import ForgotPasswordEmailTemplate from './Components/ForgotPassword/ForgotPasswordEmailTemplate';
import Layout from './Components/Layout';
import Favicon from 'react-favicon';
import FavImg from '../assets/favicon.ico';
import Com from '../app/Components/Com/Com';
import Govt from '../app/Components/Govt/Govt';


export default class App extends Component {
  render() {

    const baseUrl = process.env.PUBLIC_URL; // will be /hypercomp
    return (
      <Layout>
         <Favicon url={FavImg} />
        <section id="mainWrap">
          <Router history={history}>
            <React.Fragment>
                <PrivateRoute exact path="/" component={<h1>Haii this is home Page</h1>} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignupPage} />
                <Route path="/exist-account"  component={Exitaccount}/>
                <Route path="/com"  component={Com}/>
                <Route path="/gov" component={Govt} />
                <Route path="/create-account" component={CreateAccount} />
                <Route path="/shop-yesno"  component={SignupPage}/>
                <Route path="/home" component={HomePage} />
                <Route path="/forgot-password" component={ForgotPassword} />
                <Route path="/send-email" component={SendEmail} />
                <Route path="/email-template" component={ForgotPasswordEmailTemplate} />
            </React.Fragment>
          </Router>
        </section>
      </Layout>
    );
  }
}