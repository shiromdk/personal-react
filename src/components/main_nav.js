import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class MainNavigation extends Component{

  render(){
    return(
      <div>
        <Navbar inverse collapseOnSelect>
        <Navbar.Header>
         <Navbar.Brand>
          Test
         </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to={{pathname:'/'}}>
                <NavItem eventKey={1}>Home</NavItem>
              </LinkContainer>
              <LinkContainer to={{pathname:'/about'}}>
                <NavItem eventKey={2}>About Me</NavItem>
              </LinkContainer>
              <LinkContainer to={{pathname:'/projects'}}>
                <NavItem eventKey={3}>Projects</NavItem>
              </LinkContainer>
              <LinkContainer to={{pathname:'/gallery'}}>
                <NavItem eventKey={4}>Gallery</NavItem>
              </LinkContainer>
              <LinkContainer to={{pathname:'/blog'}}>
                <NavItem eventKey={5}>Blog</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
