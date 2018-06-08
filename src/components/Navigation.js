import React, {Component} from 'react';
import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';

class Navigation extends Component{
    render(){
        return (
            <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">React-BlueBook</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="/">
                                Home
                            </NavItem>
                            <NavDropdown eventKey={3} title="Basic" id="basic-nav-dropdown">
                                <MenuItem href="/Brand" eventKey={3.1}>Brand</MenuItem>
                                <MenuItem href="/Product" eventKey={3.2}>Product</MenuItem>
                                <MenuItem divider />
                                <MenuItem href="/Distributor" eventKey={3.3}>Distributor</MenuItem>
                                <MenuItem href="/Market" eventKey={3.4}>Market</MenuItem>
                                <MenuItem divider />
                                <MenuItem href="/FieldForce" eventKey={3.5}>Field Force</MenuItem>
                            </NavDropdown>
                            <NavItem eventKey={4} href="/About">
                                About
                            </NavItem>
                            <NavItem eventKey={5} href="/Contact">
                                Contact
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Navigation;