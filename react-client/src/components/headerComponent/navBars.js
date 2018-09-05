import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class NavBars extends Component {

  
  render() {
    return (
      <header>
        <Navbar   inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">
             <img src="https://zenarcrane.com/wp-content/uploads/cropped-HeaderlongNew-1.jpg" style={{width:100, marginTop: -7}} />
            </a>
            <a style={{ paddingLeft: "20px" }} href="#brand">VENTA TELEFÓNICA </a>
             <a style={{ paddingLeft: "20px" }} href="#brand">VENTA TELEFÓNICA </a>
              <a style={{ paddingLeft: "20px" }} href="#brand">VENTA TELEFÓNICA </a>
               <a style={{ paddingLeft: "20px" }} href="#brand">VENTA TELEFÓNICA </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">
              
            </NavItem>
            <NavItem eventKey={2} href="#">
              
            </NavItem>
            
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              
            </NavItem>
            <NavDropdown eventKey={3} title="Country" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Inida</MenuItem>
                 
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </header>
    )
  }
}

export default NavBars;