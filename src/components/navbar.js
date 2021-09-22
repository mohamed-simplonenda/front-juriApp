import React from 'react'
import {Navbar,Container,Nav,Button} from 'react-bootstrap'
import { Link } from "react-router-dom";
import {signout} from '../redux/actions/authactions'
import {  useSelector,useDispatch } from 'react-redux'


export const Menu = () => {

  const auth = useSelector(state => state.auth)
  const user = useSelector(state => state.auth.user)
  const dispatch = useDispatch()

  const logout=() =>{
    dispatch(signout());
  }

  const renderLoggedExpert =()=>{
    return (
      <Navbar bg="light" variant="light" collapseOnSelect expand="lg" >
    <Container>
    <Navbar.Brand href="#home">
    <Link to="/">
      <h5 className="logo">Juridique.tn</h5>
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mx-auto">
      
      <Nav.Link><Link to="/ProfilExpert">Mon profil</Link></Nav.Link>
      <Nav.Link><Link to="/RdvExpert">Rendez-vous</Link></Nav.Link>
      <Nav.Link><Link to="/PubExpert">Publications</Link></Nav.Link>
      <Nav.Link><Link to="/" className="text-dark">Salut {user.fullName}</Link></Nav.Link>
    
   
   
    <Link to="/"><Button variant="outline-primary" className="btn-outline-primary ms-5 " onClick={logout}>Déconnexion</Button>{' '}</Link>

    
  
    </Nav>
       
    </Navbar.Collapse>
    </Container>
  </Navbar>


    );

  }



  const renderLoggedUser=()=>{
    return (
      <Navbar bg="light" variant="light" collapseOnSelect expand="lg" >
    <Container>
    
    <Navbar.Brand >
    <Link to="/">
      <h5 className="logo">Juridique.tn</h5>
      </Link>
    </Navbar.Brand>
    
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mx-auto">
      
      <Nav.Link><Link to="/UserProfil">Mon profil</Link></Nav.Link>
      <Nav.Link><Link to="/RdvUser">Rendez-vous</Link></Nav.Link>
      <Nav.Link><Link to="/" className="text-dark"> Salut {user.fullName}</Link></Nav.Link>
      
     
    
   
   
      <Nav.Link>
    <Link to="/" ><Button variant="outline-primary" className="btn-outline-primary ms-5 " onClick={logout}>Déconnexion</Button>{' '}</Link>

    
    </Nav.Link>
    </Nav>
       
    </Navbar.Collapse>
    </Container>
  </Navbar>


    );

  }


  const renderNonLoggedInLinks =()=>{
    return (
    
      <Navbar bg="light" variant="light" collapseOnSelect expand="lg" >
      <Container>
      <Navbar.Brand >
    <Link to="/">
      <h5 className="logo">Juridique.tn</h5>
      </Link>
    </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mx-auto">
        <Nav.Link><Link to="/">Accueil</Link></Nav.Link>
        <Nav.Link><Link to="/service">Service</Link></Nav.Link>
        <Nav.Link><Link to="/expert">Experts</Link></Nav.Link>
        <Nav.Link><Link to="/blog">Blog</Link></Nav.Link>
        <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
      </Nav>  
  
    <div className="me-auto">
    <Link to="/signin"> <Button variant="outline-primary" className="btn-outline-primary " >Login</Button>{' '}</Link>
  
    </div>
       </Navbar.Collapse>
       </Container>
     </Navbar>


    );

  }
    return (
      
      
        <div>
           
  
   
    {auth.authenticate && user.role==="expert" && user.status==="validée" ? renderLoggedExpert():auth.authenticate && user.role==="user" ? renderLoggedUser() :renderNonLoggedInLinks()}

     


        
        </div>
    )
}
