import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'


export default function MenuExpert() {
    return (
        <div>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">juridique.tn</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Mon Profil</Nav.Link>
      <Nav.Link href="#features">Rendez-vous</Nav.Link>
      <Nav.Link href="#pricing">Articles</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
            
        </div>
    )
}
