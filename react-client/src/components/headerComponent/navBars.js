import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class NavBars extends Component {
  render() {
    return (
      <header>
        {/*<ul id="headerButtons">
          <li className="navButton"><Link to="">Home</Link></li>
        </ul>*/}
       <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">Zensar Ecoommerce</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">
              Link
            </NavItem>
            <NavItem eventKey={2} href="#">
              Link
            </NavItem>
            <NavDropdown eventKey={3} title="Country" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Inida</MenuItem>
              <MenuItem eventKey={3.2}>Inida Again</MenuItem>
              <MenuItem eventKey={3.3}>Inida Again</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Inida Again</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              Image Required
            </NavItem>
           
          </Nav>
        </Navbar.Collapse>
      </Navbar>;


      </header>
    )
  }
}

export default NavBars;