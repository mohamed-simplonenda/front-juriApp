import { Container,Row,Form, Button } from 'react-bootstrap'
import Input from "./input"
import { signupExpert} from '../../redux/actions/registerExpert'
import {useDispatch,useSelector} from 'react-redux'
import {useState,useEffect} from 'react'
import { Redirect } from 'react-router-dom'
import { FaUserAlt, FaMapMarkerAlt, FaPhoneAlt, FaKey } from "react-icons/fa"
import { GrMail } from "react-icons/gr"


const RegisterExpertForm = (props) => {

   const [fullName, setFullName] = useState("");
   const [image, setImage] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [specialité, setSpecialité] = useState("");
   const [phone, setPhone] = useState('')
   const [error, setError] = useState('')
   const auth = useSelector((state) => state.auth);
   const expert = useSelector((state) => state.expert);
   const dispatch = useDispatch();
   
   useEffect(() => {
      if (!expert.loading) {
        setFullName("");
        setImage("");
        setPhone("");
        setSpecialité("");
        setEmail("");
        setPassword("");
      }
    }, [expert.loading]);
  
    const expertSignup = (e) => {
      e.preventDefault();
  
      const expert = {
        fullName,
        image,
        phone,
        specialité,
        email,
        password,
      };
  
      dispatch(signupExpert(expert));
    };

 if(auth.authenticate){
   return <Redirect to={`/`} />
 }
 
 if (expert.loading) {
   return <p>Loading...!</p>;
 }

   return (
       <div>
     
           <Container>
               <Row>
                       <Form className="form register-expert-form mb-5" onSubmit={expertSignup}>
                           <div className="d-flex mb-3">
                             <FaUserAlt  className="mr-2 mt-2 logo-login"/>
                             <Input  placeholder="Ecrivez votre nom et prénom ici.." type="text" onChange={(e)=>{setFullName(e.target.value)}}/>
                           </div>
                           <div className="d-flex mb-3">
                             <FaUserAlt className="mr-2 mt-2 logo-login"/>
                             <Input  placeholder="Ecrivez votre url d'image ici.." type="text" onChange={(e)=>{setImage(e.target.value)}}/>
                           </div>
                           <div className="d-flex mb-3">
                             <FaMapMarkerAlt className="mr-2 mt-2 logo-login"/>
                             <Input  placeholder="Ecrivez votre téléphone ici.." type="text" onChange={(e)=>{setPhone(e.target.value)}}/>
                           </div>
                           <div className="d-flex mb-3">
                             <FaPhoneAlt className="mr-2 mt-2 logo-login"/>
                             <Input  placeholder="Ecrivez votre specialité ici.." type="text" onChange={(e)=>{setSpecialité(e.target.value)}}/>
                           </div>
                           <div className="d-flex mb-3">
                             <GrMail  className="mr-2 mt-2 logo-login"/>
                             <Input  placeholder="Ecrivez votre email ici.." type="email" onChange={(e)=>{setEmail(e.target.value)}}/>
                           </div>
                           <div className="d-flex">
                             <FaKey  className="mr-2 mt-2 logo-login"/>
                             <Input  placeholder="Ecrivez votre mot de passe ici.."  type="password" onChange={(e)=>{setPassword(e.target.value)}} />
                           </div>
                           <div className="d-flex justify-content-center">
                              <Button  className="my-auto top-btn mt-4" type="submit" variant="outline-primary">S'inscrire</Button>
                           </div>
                       </Form>
               </Row>
           </Container>
           
       </div>
   )
 }
 
 export default RegisterExpertForm