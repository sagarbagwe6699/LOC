import React, { Component } from 'react';
import { Navbar, Container, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';

class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Navbar expand="lg" color="primary">
                    <Container>
                        {/* <NavbarBrand>Navbar</NavbarBrand> */}
                        <NavbarToggler onClick={this.toggle}>
                            <span className="navbar-toggler-bar navbar-kebab"></span>
                            <span className="navbar-toggler-bar navbar-kebab"></span>
                            <span className="navbar-toggler-bar navbar-kebab"></span>
                        </NavbarToggler>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav navbar>
                                <NavItem active>
                                    <NavLink to="#pablo">
                                        <a href="#mr"> Popular </a>
                                    </NavLink>
                                </NavItem>
                                <NavItem active>
                                    <NavLink to="#pablo">
                                        <a href="#mv"> Most Viewed </a>
                                    </NavLink>
                                </NavItem>
                                <NavItem active>
                                    <NavLink to="#pablo">
                                        <a href="#as"> Popular </a>
                                    </NavLink>
                                </NavItem>
                                {/* <NavItem active>
                                    <NavLink to="#pablo">
                                        <a href="#nh"> Naah </a>
                                    </NavLink>
                                </NavItem> */}
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </React.Fragment>
         );
    }
}
 
export default NavBar;