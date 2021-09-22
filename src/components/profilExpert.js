


import  {React,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Container,Card,Col,Row} from 'react-bootstrap'
import { Menu } from './navbar'
import TopBar from './topBar'
import Footer from './Footer'
import UpdateUser from './updateUser'
import UpdateRdv from './updateRdv'
import {getRdv,deleteRDV } from '../redux/actions/RdvAction'


export default function ProfilExpert() {
 
  const auth = useSelector(state => state.auth.user)
  const dataRdv = useSelector(state => state.rdv.dataRdv)
  const dispatch = useDispatch()
  


  useEffect(() => {
     dispatch(getRdv());
   },[dispatch]);
   console.log(dataRdv, "dataRdv ");

               // DeleteRdv
               const deleteItemm =(id)=>{
                dispatch (deleteRDV(id) )
                console.log(deleteRDV(id))
              }

  
  
    return (
        <div>
          <TopBar/>
          <Menu/>
          <Container>
          <div className
          ="path">
                <h1>Tableau de bord {auth.fullName}</h1>
                <p>Tableau de bord {auth.fullName} <span><i class="fas fa-angle-double-right mx-2"></i></span> Mon profil</p>
            </div>
         
            
           

     
          <Row className="mb-5">
            <Col>
            <h2 className="text-center mb-3">Paramètres de profil:</h2>
        <div className="card-auteur  ">
          <div  className="d-flex justify-content-center">
           <img src={auth.image} className=" imgExpert" />
           </div>

        <div className=" justify-content-start">
       
        <p className=" blog-titre text-center mt-2"> {auth.fullName}</p>   
         <p>Tel :</p>
        <p className=" blog-p my-2"> {auth.phone}</p> 
        <p>Email :</p>
        <p className=" blog-p my-2"> {auth.email}</p> 
        <p>Specialité :</p>
        <p className=" blog-p my-2"> {auth.specialité}</p> 
        <p>Description :</p>
        <p className=" blog-p my2"> {auth.description}</p> 
        </div>

        </div>
          
          </Col>
    
          <Col className=" mb-5">
          <h2 className="text-center mb-5">Modification de profil:</h2>
          <UpdateUser id={auth._id}  el={auth} />
          </Col>




          </Row>

        

         
     </Container>
     <Footer />
        </div>
    )
}
