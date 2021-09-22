import React, {useEffect} from 'react'
import { Menu } from './navbar'
import Footer  from './Footer'
import { useDispatch, useSelector } from 'react-redux'
import { getPub} from '../redux/actions/publicationAction'
import{Card,Button,Table,Col,Row,Container} from 'react-bootstrap'
import AddMenu from '../components/addPub'
import SideBar from './SideBar'
import NavbarDashboard from './navbarDashboard'
import {deleteProduct} from '../redux/actions/publicationAction'
import UpdateItem from '../components/updatePub'





export default function PubAdmin() {

    
     const datas = useSelector(state => state.pubReducer.datas)
     const loading = useSelector(state => state.pubReducer.loading)
     const dispatch = useDispatch()


     useEffect(() => {
        dispatch(getPub());
      },[]);
      console.log(datas, "did we data ?");

       //DeleteMenu
   const deleteItemm =(id)=>{
    dispatch (deleteProduct(id) )
    console.log(deleteProduct(id))
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
          <div className="d-flex justify-content-center mb-5">
            <AddMenu/>
          </div>


               
       <Table striped bordered hover >
  <thead>
    <tr>
      
      <th>image</th>
      <th>date</th>
      <th>titre</th>
      <th>texte</th>
      <th>auteur</th>
      <th>Actions </th>
      
    </tr>
  </thead>
  {datas.map((el,key) => (
  <tbody>
    <tr>
       
      <td><img src={el.image} width="100px" height="100px"/></td>
      <td>{el.date}</td>
      <td>{el.titre}</td>
      <td>{el.texte.slice(0,100)} ...</td>
      <td>{el.auteur}</td>
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
