import  {React,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import{Card,Button,Table,Col,Row,Container} from 'react-bootstrap'
import {deleteContacts,getContact} from "../redux/actions/contactAction"
import SideBar from './SideBar'
import NavbarDashboard from './navbarDashboard'

export default function ContactDash() {
    const dataContact = useSelector(state => state.contact.dataContact)
 
    const dispatch = useDispatch()


    useEffect(() => {
       dispatch(getContact());
     },[dispatch]);
     console.log(dataContact, "dataContact ");

            //Delete contact
            const deleteAdmin =(id)=>{
              dispatch (deleteContacts(id) )
              console.log(deleteContacts(id))
            }

    return (
        <div>
            <NavbarDashboard/>
          
          <Row className="mt-5">

            <Col md={3}>
              <SideBar/>
            
            </Col>

  <Col>
          <Container>
             <Table striped bordered hover >
  <thead>
    <tr>
     
  
      <th>Tel</th>
      <th>Email</th>
      <th>Message</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
  {dataContact.map((el,key) => (

    <tr>
     
   
      <td>{el.nom}</td>
      <td>{el.email}</td>
      <td>{el.message}</td>
   
      
      <td>
      <button
           type='button'
           className='btn btn-danger btn-sm'
           onClick={() => deleteAdmin(el._id)}
         >
           <i className='far fa-trash-alt pr-1'></i>
           
         </button>

       
       
      </td>
   
    </tr>


    ))}
      </tbody>
</Table>
</Container>
</Col>
</Row>
            
            
        </div>
    )
}
