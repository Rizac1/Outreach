import React from 'react';
import { Nav, Navbar, Form, FormControl, button } from 'react-bootstrap';
import mag from '../assets/mag.webp';
import styled from 'styled-components';

const Styles = styled.div`
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
        background: none;
        border: 0;
    }

img {
    height: 35px;
    margin-right: 0;
    transform: scaleX(-1);
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
                    <Nav.Item><Nav.Link href="/NFPUser">Profile</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/Login">Login</Nav.Link></Nav.Item>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" />
                    <button type="button" class="btn btn-defaulft">
                        <img src={mag} alt="Javascript is needed" />
                    </button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)