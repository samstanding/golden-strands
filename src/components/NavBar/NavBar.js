import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';


export const NavBar = () => (
    <div>
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand >
                <span className="nav-props">Golden Strands</span>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav pullRight> 
                <NavItem >
                    <span className="nav-props">Home</span>
                </NavItem>
                <NavItem>
                    <span className="nav-props">About</span>
                </NavItem>   
                <NavItem>
                    <span className="nav-props">Contact</span>
                </NavItem>   
            </Nav>
         </Navbar.Collapse>
    </Navbar>
    </div> 
);