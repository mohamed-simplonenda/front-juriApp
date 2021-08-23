import React from 'react'
import {Button, Col, Container, Form} from 'react-bootstrap'

export default function ContactInput() {
    return (
        <div>



      <Container>
         <Col lg={6}>
      <Form.Control type="text" placeholder="Votre nom" className="mb-4"   />
      <Form.Control type="text" placeholder="Votre email" className="mb-4"  />
      <Form.Control type="text" as="textarea" placeholder="enter texte" className="mb-3"  />
         </Col> 
         <Button variant="outline-primary" >Envoyer</Button>{' '}
      </Container>
      


            
        </div>
    )
}
