import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPub} from '../redux/actions/publicationAction'
import {Card} from 'react-bootstrap'

export default function BlogCard() {
    const datas = useSelector(state => state.pubReducer.datas)
    const loading = useSelector(state => state.pubReducer.loading)
    const dispatch = useDispatch()


    useEffect(() => {
       dispatch(getPub());
     },[]);
     console.log(datas, "did we ?");
    return (
        <div>
             <div className="d-flex justify-content-between flex-wrap mb-3 blog">
        {datas.map(el => (<div>
          <Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src={el.image} style={{ height: '16rem' }}/>
  <Card.Body>
    <Card.Title><a href="#">{el.titre}</a></Card.Title>
   
    <Card.Text>
    <p className="text-muted">Par {el.auteur}</p><br/>
    <p>{el.texte}</p><br/>
   
    </Card.Text>
 
  </Card.Body>
</Card>
        

          </div>
        ))}
        </div>
            
        </div>
    )
}
