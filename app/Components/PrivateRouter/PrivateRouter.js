import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const baseUrl = process.env.PUBLIC_URL;
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('user')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/signup', state: { from: props.location } }} />
    )} />
)

export default PrivateRoute;