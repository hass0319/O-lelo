import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';


function NavbarComponent() {
    return <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">O-lelo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                 </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}

export default NavbarComponent