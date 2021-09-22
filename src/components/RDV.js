import  {React,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getRdv,deleteRDV } from '../redux/actions/RdvAction'
import{Card,Button,Table,Col,Row,Container} from 'react-bootstrap'
import SideBar from './SideBar'
import NavbarDashboard from './navbarDashboard'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';



export default function RDV() {
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
          <NavbarDashboard/>
          
          <Row className="mt-5">

            <Col lg={3}>
              <SideBar/>
            
            </Col>

  <Col>
  <Container>
   <Table striped bordered hover >
  <thead>
    <tr>
     
      <th>Date</th>
      <th>Heure</th>
      <th>Username</th>
      <th>Nom d'expert</th>
      <th>Status</th>
      <th>Actions</th>
    </tr>
  </thead>
  {dataRdv.map((el,key) => (
  <tbody>
    <tr>
     
      <td>{el.date}</td>
      <td>{el.heure}</td>
      <td>{el.NomExprt}</td>
      <td>{el.NomUser}</td>
      <td>{el.status}</td>
      <div className="d-flex ">
      <td>
          <button
           type='button'
           className='btn btn-danger btn-sm'
           onClick={() => deleteItemm(el._id)}
         >
           <i className='far fa-trash-alt pr-1'></i>
           
         </button>

       
       
      </td>
      </div>
    </tr>

  </tbody>
    ))}
</Table>
</Container>
</Col>
</Row>
            
        </div>
    )
}
