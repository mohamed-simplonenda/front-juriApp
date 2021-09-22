import  {React,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser} from '../redux/actions/usersAction'
import{Card,Button,Table,Col,Row,Container} from 'react-bootstrap'
import {deleteUsers} from "../redux/actions/usersAction"
import UpdateUser from './updateUser'
import SideBar from './SideBar'
import NavbarDashboard from './navbarDashboard'

export default function ExpertsDash() {
    const dataUsers = useSelector(state => state.users.dataUsers)
 
    const dispatch = useDispatch()


    useEffect(() => {
       dispatch(getUser());
     },[dispatch]);
     console.log(dataUsers, "dataUsers ");

            //DeleteUser
            const deleteItemm =(id)=>{
              dispatch (deleteUsers(id) )
              console.log(deleteUsers(id))
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
     
    <th>Username</th>
      <th>Tel</th>
      <th>Email</th>
      <th>Role</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
  {dataUsers.filter(el=>el.role="expert")
  .map((el,key) => (

    <tr>
     
      <td>{el.fullName}</td>
      <td>{el.phone}</td>
      <td>{el.email}</td>
      <td>{el.role}</td>
   
      
      <td>
      <button
           type='button'
           className='btn btn-danger btn-sm'
           onClick={() => deleteItemm(el._id)}
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
