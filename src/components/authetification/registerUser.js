import { Col,Row,Form, Button } from 'react-bootstrap'
import Input from "./input"
import { signup} from '../../redux/actions/authactions'
import {useDispatch,useSelector} from 'react-redux'
import {useState,useEffect} from 'react'
import { Redirect } from 'react-router-dom'
import { FaUserAlt, FaMapMarkerAlt, FaPhoneAlt, FaKey } from "react-icons/fa"
import { GrMail } from "react-icons/gr"
import { Menu } from '../navbar'
import TopBar from '../topBar'
import Footer from '../Footer'


const RegisterUserForm = (props) => {

   const [fullName, setFullName] = useState("");
   const [image, setImage] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [specialité, setSpecialité] = useState("");
   const [phone, setPhone] = useState('')
   const [description, setDescription] = useState('')
   const [role, setRole] = useState('')
   const [error, setError] = useState('')
   
   const auth = useSelector((state) => state.auth);
   const user = useSelector((state) => state.user);
   const dispatch = useDispatch();
   
   useEffect(() => {
      if (!user.loading) {
        setFullName("");
        setImage("");
        setPhone("");
        setSpecialité("");
        setDescription("");
        setEmail("");
        setPassword("");
        setRole("");
      }
    }, [user.loading]);
  
    const userSignup = (e) => {
      e.preventDefault();
  
      const user = {
        image,
        fullName,
        email,
        phone,
        password,
        description,
        specialité,
        role
      };
  
      dispatch(signup(user));
    };

 if(auth.authenticate){
   return <Redirect to={`/`} />
 }
 
 if (user.loading) {
   return <p>Loading...!</p>;
 }

   return (
     
       <div>
         <TopBar/>
           <Menu/>   
          
           <div className="signin">
            <Row>
    <Col md={{ span: 6, offset: 3 }}>
                       <Form className="form register-user-form mb-5" onSubmit={userSignup} className="signin-form">
                       <p className="blog-titre text-center mb-4">S'inscrire</p>
                           <div className="d-flex mb-3">
                           <i class="fas fa-user pt-2 mx-2"></i>
                             <Input  placeholder="Ecrivez votre nom et prénom ici.." type="text" onChange={(e)=>{setFullName(e.target.value)}}/>
                           </div>
                           <div className="d-flex mb-3">
                           <i class="fas fa-image pt-2 mx-2"></i>
                             <Input  placeholder="Ecrivez votre url d'image ici.." type="text" onChange={(e)=>{setImage(e.target.value)}}/>
                           </div>
                           <div className="d-flex mb-3">
                           <i class="fas fa-phone-square-alt pt-2 mx-2"></i>
                             <Input  placeholder="Ecrivez votre téléphone ici.." type="tel" onChange={(e)=>{setPhone(e.target.value)}}/>
                           </div>

                           <div className="d-flex mb-3">
                           <i class="fas fa-envelope pt-2 mx-2"></i>
                             <Input  placeholder="Ecrivez votre email ici.." type="email" onChange={(e)=>{setEmail(e.target.value)}}/>
                           </div>
                           <div className="d-flex">
                           <i class="fas fa-unlock-alt pt-2 mx-2"></i>
                             <Input  placeholder="Ecrivez votre mot de passe ici.."  type="password" onChange={(e)=>{setPassword(e.target.value)}} />
                           </div>
                           <div className="d-flex mb-3">
                           <i class="fas fa-users pt-4 mx-2"></i>
                           <select aria-label="Default select example " className="w-75 mt-3 mx-2 py-2 outline-primary " onChange={(e)=>{setRole(e.target.value)}}>
                            <option disabled selected>Choisir votre role</option>
                            <option >user</option>
                            <option >expert</option>
                            {console.log(`e.target.value`, role)}
                          </select>
                          </div>
                           <div className="d-flex mb-3">
                           <i class="fas fa-balance-scale pt-2 mx-2"></i>
                             <Input  placeholder="Ecrivez votre specialité ici.." type="text" onChange={(e)=>{setSpecialité(e.target.value)}}/>
                           </div>
                           <div className="d-flex mb-3">
                           <i class="fas fa-address-card pt-2 mx-2"></i>
                             <Input  placeholder="Ecrivez votre description ici.." type="text" onChange={(e)=>{setDescription(e.target.value)}}/>
                           </div>
                           <div className="d-flex justify-content-center">
                              <Button  className="my-auto top-btn mt-4" type="submit" variant="outline-primary">S'inscrire</Button>
                           </div>
                     </Form>
                     </Col> 
               </Row>
           </div>
           <Footer/>
       </div>
   )
 }
 
 export default RegisterUserForm