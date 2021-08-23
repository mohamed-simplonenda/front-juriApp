import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPub} from "../redux/actions/publicationAction"
import{Card,Button} from 'react-bootstrap'


export default function PlatList() {

     
     const datas = useSelector(state => state.platReducer.datas)
     const loading = useSelector(state => state.platReducer.loading)
     const dispatch = useDispatch()


     useEffect(() => {
        dispatch(getPub());
      },[]);
      console.log(datas, "did we ?");

    
  
  


    return (
        <div>
            {/* <h1 className="text-center">Liste des datas</h1> */}

   <div className="d-flex desc text-center justify-content-between flex-wrap ">
        {datas.map(el => (<div className="mb-5">
          <Card style={{ width: '18rem' }}>
  {/* <Card.Img variant="top" src={el.image} style={{ height: '16rem' }}/> */}
  <Card.Body>
    <Card.Title>{el.date}</Card.Title>
   
    <Card.Text>
    {el.titre}<br/>
    {el.texte}<br/>
    {el.auteur}
    </Card.Text>
    <Button variant="primary">Lire la suite</Button>
  </Card.Body>
</Card>
        

          </div>
        ))}
        </div>

        </div>
    )
}
