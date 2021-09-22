import React from 'react'
import {Button, Col, Container, Form} from 'react-bootstrap'
import {useState} from 'react';
import {addNewContact} from '../redux/actions/contactAction'
import {useDispatch,useSelector} from 'react-redux'

export default function ContactInput() {
  const dataContact = useSelector(state => state.contact.dataContact)
  const dispatch = useDispatch()

  const [input,setInput]=useState({nom:"",email:"",message:""})

const hanleChange=(e)=>{
    const {name,value}=e.target
    setInput({
        ...input,
        [name]:value
    })
    console.log("input",input)
}
const addContact=()=>{
dispatch (addNewContact(input.nom,input.email, input.message)) 
console.log("contact",input)

}
    return (
        <div className="mb-5">



      <Container>
         <Col lg={6}>
      <Form.Control type="text" placeholder="Votre nom" name="nom" className="mb-4"   onChange={hanleChange} />
      <Form.Control type="text" placeholder="Votre email" className="mb-4" name="email"  onChange={hanleChange} />
      <Form.Control type="text" as="textarea" placeholder="enter texte" name="message" className="mb-3"  onChange={hanleChange} />
         </Col> 
         <Button variant="outline-primary" onClick={addContact}>Envoyer</Button>{' '}
      </Container>
      


            
        </div>
    )
}
