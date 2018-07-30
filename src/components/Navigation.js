import React, {Component} from 'react';
import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class Navigation extends Component{
    render(){
        return (
            <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">Blue Book</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <LinkContainer to="Home" href="/">
                                <NavItem eventKey={1}>Home</NavItem>
                            </LinkContainer>
                            <NavDropdown eventKey={3} title="Basic" id="basic-nav-dropdown" disabled={!this.props.user.isAuthenticated}>
                                <LinkContainer to="Brand" href="/Brand"><MenuItem eventKey={3.1}>Brand</MenuItem></LinkContainer>
                                <LinkContainer to="Product" href="/Product"><MenuItem eventKey={3.2}>Product</MenuItem></LinkContainer>
                                <MenuItem divider />
                                <LinkContainer to="Distributor" href="/Distributor"><MenuItem eventKey={3.3}>Distributor</MenuItem></LinkContainer>
                                <LinkContainer to="Market" href="/Market"><MenuItem eventKey={3.4}>Market</MenuItem></LinkContainer>
                                <MenuItem divider />
                                <LinkContainer to="FieldForce" href="/FieldForce"><MenuItem eventKey={3.5}>Field Force</MenuItem></LinkContainer>
                            </NavDropdown>
                            <LinkContainer to="About" href="/About">
                                <NavItem eventKey={2}>About</NavItem>
                            </LinkContainer>
                            <LinkContainer to="Contact" href="/Contact">
                                <NavItem eventKey={4}>Contact</NavItem>
                            </LinkContainer>
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={5}>
                                <span  className="">
                                    <b>
                                        {this.props.user.isAuthenticated?"Welcome " + this.props.user.user.userName + "!":"Welcome Guest!"}
                                    </b>
                                </span>
                            </NavItem>
                            <NavItem eventKey={5} href={this.props.user.isAuthenticated?"/LogOut":"/LogIn"} >
                                {this.props.user.isAuthenticated?"Log Out":"Log In"}
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Navigation;