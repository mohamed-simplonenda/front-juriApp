import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPub} from '../redux/actions/publicationAction'
import{Card,Button,Table} from 'react-bootstrap'
import AddMenu from '../components/addPub'
import {deleteProduct} from '../redux/actions/publicationAction'
import UpdateItem from '../components/update'



export default function Admin() {

     
     const datas = useSelector(state => state.pubReducer.datas)
     const loading = useSelector(state => state.pubReducer.loading)
     const dispatch = useDispatch()


     useEffect(() => {
        dispatch(getPub());
      },[]);
      console.log(datas, "did we ?");

       //DeleteMenu
   const deleteItemm =(id)=>{
    dispatch (deleteProduct(id) )
    console.log(deleteProduct(id))
  }


  
  
  


    return (
        <div>
          <div className="d-flex justify-content-center mb-5">
            <AddMenu/>
          </div>
            

   <div className="d-flex justify-content-between flex-wrap text-center">
        {datas.map(el => (<div>
         
          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={el.image} style={{ height: '16rem' }}/>
  <Card.Body>
    <Card.Title>{el.date}</Card.Title>
   
    <Card.Text>
    {el.titre}<br/>
    {el.texte}<br/>
    {el.auteur}
    </Card.Text>
    <button
						type='button'
						className='btn btn-danger btn-sm'
						onClick={() => deleteItemm(el._id)}
					>
						<i className='far fa-trash-alt pr-1'></i>
						Delete
					</button>
         <UpdateItem id={el._id}  el={el} />
  </Card.Body>
</Card>
        

          </div>
        ))}
        </div>
   
        </div>
    )
}
