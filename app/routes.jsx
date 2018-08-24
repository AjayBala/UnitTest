import React from 'react';
import { Route } from 'react-router';

import Login from "./Components/Login/Login";
import Home from "./home";

export default 
[
   <Route path="/login" component={Login} />,
   <Route path="/home" component={home} />
]