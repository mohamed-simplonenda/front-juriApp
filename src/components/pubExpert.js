import React, {useEffect} from 'react'
import { Menu } from './navbar'
import Footer  from './Footer'
import { useDispatch, useSelector } from 'react-redux'
import { getPub} from '../redux/actions/publicationAction'
import{Card,Button,Table,Col,Row,Container} from 'react-bootstrap'
import AddMenu from '../components/addPub'
import {deleteProduct} from '../redux/actions/publicationAction'
import UpdateItem from '../components/updatePub'
// import {  SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
// import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/css/styles.css';





export default function PubExpert() {

     const auth = useSelector(state => state.auth.user)
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
          <Menu/>
          <Container>
          <div className="path">
                <h1>Tableau de bord {auth.fullName}</h1>
                <p>Tableau de bord {auth.fullName} <span><i class="fas fa-angle-double-right mx-2"></i></span> Mes Publications</p>
            </div>
  
          <div className="d-flex justify-content-center mb-5">
            <AddMenu/>
          </div>

               
       <Table striped bordered hover size="sm">
  <thead>
    <tr>
      
      <th>image</th>
      <th>date</th>
      <th>titre</th>
      <th>texte</th>
      <th>Actions </th>
      
    </tr>
  </thead>
  {datas.filter(el =>el.auteur === `${auth.fullName}` )
  .map((el,key) => (
  <tbody>
    <tr>
       
      <td><img src={el.image} width="100px" height="100px"/></td>
      <td>{el.date}</td>
      <td>{el.titre}</td>
      <td>{el.texte.slice(0,100)} ...</td>

      <div className="d-flex ">
      <td>
          <button
           type='button'
           className='btn btn-danger btn-sm'
           onClick={() => deleteItemm(el._id)}
         >
           <i className='far fa-trash-alt pr-1'></i>
           
         </button>

         <UpdateItem id={el._id}  el={el} />
       
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
