import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPub} from '../redux/actions/publicationAction'
import { getPubById} from '../redux/actions/publicationAction'
import {Card,Button} from 'react-bootstrap'
import { Link } from "react-router-dom";

export default function BlogCard() {
    const datas = useSelector(state => state.pubReducer.datas)
    const loading = useSelector(state => state.pubReducer.loading)
    const dispatch = useDispatch()


    useEffect(() => {
       dispatch(getPub());
     },[dispatch]);
     console.log(datas, "all publications");

     const getItem =(id)=>{
      dispatch (getPubById(id) )
    
    }
    return (
        <div className="mb-5">
             <div className="d-flex justify-content-between flex-wrap mt-3 blog">
        {datas.map(el => (<div>
          <Card style={{ width: '20rem',marginTop:'3rem' , borderTopLeftRadius:'25px',borderTopRightRadius:'25px'  }}>
  <Card.Img variant="top" src={el.image} style={{ height: '16rem', borderTopLeftRadius:'15px',borderTopRightRadius:'15px' }}/>
  <Card.Body>
    <Card.Title>
      <Link to={`/PubById/${el._id}`}  className="blog-titre" onClick={() => getItem(el._id)}>
        {el.titre.slice(0,40)}
        
      </Link>
      </Card.Title>
   
    <Card.Text>
    <p className=" blog-auteur">Par {el.auteur}</p>
    <p className="blog-p">{el.texte.slice(0,100)} ...</p>
   
    </Card.Text>
   
   
    <Link to={`/PubById/${el._id}`}>  
    <button
						type='button'
            className='btn btn-expt btn-sm '
						onClick={() => getItem(el._id)}
           
					>
            	Lire la suite
						<i class="fas fa-long-arrow-alt-right ms-1 "></i>
					
		</button></Link>
 
  </Card.Body>
</Card>
        

          </div>
        ))}
        </div>
            
        </div>
    )
}
