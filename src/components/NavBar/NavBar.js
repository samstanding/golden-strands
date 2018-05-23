import React, { Component } from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';

const styles = {
    box: {
        height: '128px',
    },
}

export const NavBar = () => (
    <div>
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                The Golden Strands Almanac 
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Nav pullRight>
            {/* <NavItem>
                Link
            </NavItem>
            <NavItem>
                Link
            </NavItem>   */}
        </Nav>
    </Navbar>
    </div>
);