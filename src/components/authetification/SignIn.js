import React,{useState,useEffect} from 'react'
import { Container,Row,Col,Form, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
import Input from './input'
import {isUserLoggedIn, login} from '../../redux/actions/authactions'
import {useDispatch,useSelector} from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Menu } from '../navbar'
import Footer from '../Footer';
const SignIn = (props) => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const auth = useSelector(state =>state.auth)
    const user = useSelector(state =>state.auth.user)

    const dispatch = useDispatch()
    
    const userLogin =(e)=>{
    e.preventDefault()
    const user = {
        email,
        password
    }
    dispatch(login(user))

}
if (user) 
   {
    if (auth.authenticate && user.role === "user" ) return <Redirect to="/UserProfil" />;
  }
  if (user) 
  {
    if (auth.authenticate && user.role === "admin") return <Redirect to="/users" />;
  }
  if (user) 
  {
    if (auth.authenticate && user.role === "expert" && user.status==="validée") return <Redirect to="/ProfilExpert" />;
  }


    return (
      <div>
        <Menu/>
                <div className="signin">
            <Row>
    <Col md={{ span: 6, offset: 3 }}>

                    
                        <Form onSubmit={userLogin}  className="signin-form">
                         
                            
                        <p className="blog-titre text-center mb-4">Connexion</p>
                            <div className="d-flex mb-3">
                            <i class="fas fa-user pt-2 mx-2"></i>
                            <Input   placeholder="Email" type="email" onChange={(e)=>{setEmail(e.target.value)}} />

                            </div>
                           
                          
                             <br/>
                             <div className="d-flex mb-3">
                             <i class="fas fa-unlock-alt pt-2 mx-2"></i>
                            <Input label="Password" placeholder="Password"  type="password" onChange={(e)=>{setPassword(e.target.value)}} />
                             </div>
                             <div className="text-center">
                             <Button   type="submit" className=" mt-4 w-75" variant="outline-primary">Login</Button>
                             <div className="d-flex justify-content-evenly">
                             <p className="blog-auteur mt-4">J'ai pas un compte</p>
                             <Link to="registerUser">
                              <div className="mt-4 linksignup"> Registre</div>
                             </Link>
                             </div>
                             </div>
                        </Form>
           
            </Col>
            </Row>
        </div>
        <Footer/>
    </div>

    )
}

export default SignIn
