import React from 'react'
import {Form,Button,Modal} from "react-bootstrap"
import {useState} from 'react';
import {addNewPubs} from '../redux/actions/publicationAction'
import {useDispatch,useSelector} from 'react-redux'
const AddMenu = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()



const [input,setInput]=useState({image:"",date:"",titre:"",texte:"",auteur:""})

const hanleChange=(e)=>{
    const {name,value}=e.target
    setInput({
        ...input,
        [name]:value
    })
    console.log("input",input)
}
const addPub=()=>{
dispatch (addNewPubs(input.image,input.date, input.titre,input.texte ,input.auteur)) 
console.log("inpuuuuuuuuuuuut",input)
setShow(false)
}
  return(
    <div>
    <div className='container mt-5'>
 <Button variant="success" onClick={handleShow}>
   Add Menu
</Button>

<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
<Modal.Title className="title-modal">Add Menu</Modal.Title>
</Modal.Header>
<Modal.Body>
<Form >

<Form.Group controlId="formBasicEmail">
<Form.Label>image</Form.Label>
<Form.Control type="text" placeholder="image" name='image' onChange={hanleChange} />
</Form.Group>

<Form.Group controlId="formBasicEmail">
<Form.Label>Date</Form.Label>
<Form.Control type="text" placeholder="date" name='date' onChange={hanleChange} />

</Form.Group>
<Form.Group controlId="formBasicPassword">
<Form.Label>Titre</Form.Label>
<Form.Control type="text" placeholder="enter titre"  name='titre' onChange={hanleChange}  />
</Form.Group>


<Form.Group controlId="formBasicPassword">
<Form.Label>Texte</Form.Label>
<Form.Control type="text" placeholder="enter texte"  name='texte' onChange={hanleChange}   />
</Form.Group>

<Form.Group controlId="formBasicPassword">
<Form.Label>Auteur</Form.Label>
<Form.Control type="text" placeholder="enter auteur"  name='auteur' onChange={hanleChange}   />
</Form.Group>




<Button className="ms-3  mt-3" variant="secondary" onClick={handleClose}>  
Close
</Button>

<Button className='btn btn-success btn-sm' onClick={addPub}>add</Button>
</Form>
</Modal.Body>



</Modal>
</div>
</div>
   )

 }

export default AddMenu

      