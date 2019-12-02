import React from 'react';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import mag from '../assets/mag.png';
import styled from 'styled-components';

const Styles = styled.div `
.navbar {
    background-color: black;
}

    .navbar-brand, .navbar-nav .nav-link {
        color: white;

        &:hover {
            color: white;
        }
    }

button {
    border-color: black;
}
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">Outreachd</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/NFP">Non-Profit List</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/User">Profile</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/Login">Login</Nav.Link></Nav.Item>
                </Nav>
                <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">
                <img src={mag} alt="Javascript is needed"></img>
      </Button>
    </Form>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)