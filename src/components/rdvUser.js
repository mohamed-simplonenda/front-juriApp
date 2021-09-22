
import  {React,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Container,Card,Table} from 'react-bootstrap'
import { Menu } from './navbar'
import Footer  from './Footer'
import UpdateUser from './updateUser'
import UpdateRdv from './updateRdv'
import {getRdv,deleteRDV } from '../redux/actions/RdvAction'

export default function RdvUser() {
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
             
             <Menu/>
          <Container>
          <div className="path">
                <h1>Tableau de bord {auth.fullName}</h1>
                <p>Tableau de bord {auth.fullName} <span><i class="fas fa-angle-double-right mx-2"></i></span> Mes rendez-vous</p>
            </div>


     
       <Table striped bordered hover size="sm">
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
  {dataRdv.filter(el =>el.idUser === `${auth._id}` )
              .map((el,key) => (
  <tbody>
    <tr>
     
      <td>{el.date}</td>
      <td>{el.heure}</td>
      <td>{auth.fullName}</td>
      <td>{el.NomExpert}</td>
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

         <UpdateRdv id={el._id}  el={el} />
       
      </td>
      </div>
    </tr>

  </tbody>
    ))}
</Table>

    
</Container>
<Footer/>
        </div>
    )
}
