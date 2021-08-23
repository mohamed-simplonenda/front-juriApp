import React from 'react'
import {Navbar,Container,Nav,Button} from 'react-bootstrap'
export const Menu = () => {
    return (
        <div>
    <Navbar bg="light" variant="light" >
    <Container>
    <Navbar.Brand href="#home">
      {/* <img
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="logo"
      /> */}
      <h5 className="logo">Juridique.tn</h5>
    </Navbar.Brand>
    <Nav className="mx-auto">
      <Nav.Link href="#home">Accueil</Nav.Link>
      <Nav.Link href="#features">A propos</Nav.Link>
      <Nav.Link href="#pricing">Service</Nav.Link>
      <Nav.Link href="#home">Experts</Nav.Link>
      <Nav.Link href="#features">Blog</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
    <Nav className="me-auto">
    <Button variant="outline-primary" className="btn-outline-primary ">Login</Button>{' '}

    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}
