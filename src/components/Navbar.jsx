import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';


function NavbarComponent() {
    return <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Voice-APP</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#text">Text-to-Speech</Nav.Link>
                    <Nav.Link href="#pricing">Speech-to-Text</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">Sign In</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Contact us
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}

export default NavbarComponent