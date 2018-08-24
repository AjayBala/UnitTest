import React from 'react';

import { Link } from 'react-router-dom';
import { Navbar,Nav,NavItem,NavDropdown,MenuItem } from 'react-bootstrap';
import './FooterComponent.css';


const FooterComponent = () => (
  <footer id="footerWrap">
  <div className= "container">
   
      <Nav className="footerNav_1">
        <NavItem href="#">
        Frequently Asked Questions  &nbsp; &nbsp; |
        </NavItem>
        <NavItem href="#">
        Contact Customer Services &nbsp; &nbsp; |
        </NavItem>
        <NavItem href="#">
        Easy Returs
        </NavItem>
      </Nav>

      <Nav className="footerNav_1 footerNav_2">
        <NavItem href="#">
          Privacy Policy &nbsp; &nbsp; |
        </NavItem>
        
        <NavItem href="#">
          Site Under Terms & Conditions
        </NavItem>
      </Nav>

    
  </div>
  </footer>
  );

export default FooterComponent;