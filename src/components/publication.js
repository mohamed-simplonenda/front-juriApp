import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPubById} from "../redux/actions/publicationAction"
import{Card,Button, Container ,Row,Col} from 'react-bootstrap'
import {Menu} from './navbar'
import Footer from './Footer'
import TopBar from './topBar'


export default function PubById() {

     
     const datas = useSelector(state => state.pubReducer.datas)
     const loading = useSelector(state => state.pubReducer.loading)
     const auth = useSelector(state => state.auth.user)
     const dispatch = useDispatch()


     useEffect(() => {
        dispatch(getPubById( ));
      },[]);
      console.log(datas, "pub by id");

    
  
  


    return (
        <div >
          <TopBar/>
          <Menu/>
     <Container>
       <div className="mt-5">
    <p className=" blog-auteur"> {datas.auteur},  {datas.date}</p>    
    <p className="blog-titre">{datas.titre}</p><br/><br/>
    <Row style={{ marginTop:'0rem' }}>
      <Col md={8}>

      <Card className="card mb-5" >
  <Card.Img variant="top" src={datas.image} style={{ height: '26rem' }}/>
  <Card.Body>
    
   
    <Card.Text >
    <p className=" blog-p py-5 px-5"> {datas.texte}</p> 
   
    </Card.Text>
   

 
  </Card.Body>
</Card>
    
      </Col>
      <Col ms={4}>
      
        <div className="card-auteur text-center ">
        <img src={datas.imageExpert} className="rounded-circle w-50" />
        <p className=" blog-titre mt-2"> {datas.auteur}</p>   
        <p className=" blog-p mt-2"> {datas.description}</p> 

        </div>
     
      </Col>
    </Row>
 
   

    
  

    </div>
  
    </Container>
    <Footer/>
        </div>
    )
}
