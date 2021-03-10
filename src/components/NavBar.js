import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: #0B0269;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #00DEF2;

        &:hover {
        color: white;
        }
    }
    `;

export const NavBar = () => (
<Styles>
    <Navbar expand="lg">
        <Navbar.Brand href="/">Transparent Auto Detail</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/Services">Services</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/Images">Image</Nav.Link></Nav.Item>
            </Nav>

        </Navbar.Collapse>
    </Navbar>
</Styles>

)