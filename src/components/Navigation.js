import React, {Component} from 'react';
import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

import '../styles/app.css';

class Navigation extends Component{

    constructor(){
        super();
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(){
        if(this.props.user!==undefined && this.props.user.isAuthenticated){
            this.props.userLogout();
        }
    }

    render(){
        return (
            <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">React Blue Book</a>
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
                            <NavDropdown eventKey={5} title="Welcome Guest!" id="basic-nav-dropdown" className={this.props.user.isAuthenticated?"hide-menu":"show-menu"}>
                                <LinkContainer to="LogIn" href="/LogIn"><MenuItem eventKey={5.1}>LogIn</MenuItem></LinkContainer>
                                <LinkContainer to="Register" href="/Register"><MenuItem eventKey={5.1}>Register</MenuItem></LinkContainer>
                            </NavDropdown>
                            <NavDropdown eventKey={6} title={"Welcome " + this.props.user.user.userName + "!"} id="basic-nav-dropdown" className={this.props.user.isAuthenticated?"show-menu":"hide-menu"}>
                                <LinkContainer to="LogIn"><MenuItem eventKey={6.1}>Logout</MenuItem></LinkContainer>
                                <LinkContainer to="ChangePassword" href="/ChangePassword"><MenuItem eventKey={6.1}>Change Password</MenuItem></LinkContainer>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Navigation;