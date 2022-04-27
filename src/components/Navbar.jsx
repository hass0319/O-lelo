import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';


function NavbarComponent() {
    return <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="/#/">O-lelo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/#/text-to-speech">Text-to-Speech</Nav.Link>
                    <Nav.Link href="/#/speech-to-text">Speech-to-Text</Nav.Link>
                </Nav>
                <Nav>
                    {/* <Nav.Link href="/">Sign In</Nav.Link>
                    <Nav.Link eventKey={2} href="/">
                        Contact us
                    </Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}

export default NavbarComponent