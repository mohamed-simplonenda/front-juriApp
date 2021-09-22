import React from 'react'
import {Navbar,Nav,Container,Button} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import { Link } from "react-router-dom";
import {signout} from '../redux/actions/authactions'



export default function NavbarDashboard() {

  const dispatch = useDispatch()
  const logout=() =>{
    dispatch(signout());
  }
    const user = useSelector(state => state.auth.user)
    return (
        <div className="NavbarDashboard mb-5">
            <Navbar bg="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#home"  style={{ fontSize: '1.75em',color:'#fff' }}>Dashboard</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
       
        <Nav.Link href="#link">Bonjour {user.fullName}</Nav.Link>
        <Nav.Link>
    <Link to="/"><Button variant="outline-primary" className="btn-outline-primary " onClick={logout}>signout</Button>{' '}</Link>

    
    </Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

            
        </div>
    )
}
