import React from 'react';

import { Link } from 'react-router-dom';

import { Navbar,Nav,NavItem,NavDropdown,MenuItem } from 'react-bootstrap';
import './HeaderComponent.css';

import mainLogo from'./ostk_profe_logo.png';




const HeaderComponent = () => (
    <header id="HeaderWrap">
    <Navbar className="container-fluid">
      
      <Navbar.Header>
        <Navbar.Brand className="header">
          <a onClick={() => history.push('/')}><img src={mainLogo} className="mainLogo"/></a>
        </Navbar.Brand>
      </Navbar.Header>
     
      
    </Navbar>
    </header>
  );

export default HeaderComponent;